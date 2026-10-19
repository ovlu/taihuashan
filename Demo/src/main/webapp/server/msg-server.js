'use strict';
/**
 * 太华山 · 山门留言板 —— 后端服务（零第三方依赖，Node 14+ 可直接运行）
 *
 * 接口：
 *   GET    /api/messages              取留言列表
 *   POST   /api/messages              发表留言（限流 + 内容过滤）
 *   DELETE /api/messages/:id          删除留言（需管理员口令）
 *   GET    /api/health                健康检查
 *
 * 启动：
 *   ADMIN_TOKEN=你的口令 node msg-server.js
 *   未设置 ADMIN_TOKEN 时，会在 data/admin-token.txt 自动生成并打印。
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

/* ================= 配置 ================= */
const PORT          = Number(process.env.MSG_PORT || 3000);
const HOST          = process.env.MSG_HOST || '127.0.0.1';        // 只监听本机，由 Nginx 反代
const TRUST_PROXY   = process.env.MSG_TRUST_PROXY !== '0';        // 走反代时要读 X-Forwarded-For
const ALLOW_ORIGIN  = process.env.MSG_ALLOW_ORIGIN || '*';        // 同源反代保持 * 即可
const DATA_DIR      = path.join(__dirname, 'data');
const DATA_FILE     = path.join(DATA_DIR, 'messages.json');
const TOKEN_FILE    = path.join(DATA_DIR, 'admin-token.txt');
const WORDS_FILE    = path.join(__dirname, 'badwords.txt');

const MAX_KEEP      = 500;    // 服务端最多保留条数
const MAX_LEN       = 140;    // 单条正文上限
const MAX_NAME      = 12;     // 昵称上限
const MAX_BODY      = 8 * 1024;

// 限流：同 IP 的最短间隔 / 时间窗内上限
const MIN_INTERVAL  = 5 * 1000;         // 5 秒内只能发 1 条
const WINDOW_MS     = 60 * 60 * 1000;    // 1 小时
const WINDOW_MAX    = 30;                // 每小时最多 30 条
const DUP_WINDOW    = 1 * 60 * 1000;     // 5 分钟内不得重复同一内容

/* ================= 管理员口令 ================= */
let ADMIN_TOKEN = (process.env.ADMIN_TOKEN || '').trim();
if (!ADMIN_TOKEN) {
  if (fs.existsSync(TOKEN_FILE)) {
    ADMIN_TOKEN = fs.readFileSync(TOKEN_FILE, 'utf8').trim();
  } else {
    ADMIN_TOKEN = crypto.randomBytes(12).toString('hex');
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(TOKEN_FILE, ADMIN_TOKEN, 'utf8');
    console.log('[留言板] 未设置 ADMIN_TOKEN，已自动生成管理员口令：' + ADMIN_TOKEN);
    console.log('[留言板] 口令同时写入：' + TOKEN_FILE);
  }
}

/* ================= 敏感词 ================= */
let BAD_WORDS = [];
function loadBadWords() {
  try {
    if (!fs.existsSync(WORDS_FILE)) return;
    BAD_WORDS = fs.readFileSync(WORDS_FILE, 'utf8')
      .split(/\r?\n/)
      .map(s => s.trim())
      .filter(s => s && !s.startsWith('#'))
      .map(s => s.toLowerCase());
  } catch (e) {
    console.warn('[留言板] 敏感词表加载失败：', e.message);
  }
}
loadBadWords();

// 归一化：去掉空白与常见干扰符号，防止「微 信」「微-信」绕过
function normalize(s) {
  return s.toLowerCase().replace(/[\s\-_.·*+~^|/\\]/g, '');
}

function hitBadWord(text) {
  if (!BAD_WORDS.length) return null;
  const flat = normalize(text);
  for (const w of BAD_WORDS) {
    if (flat.includes(normalize(w))) return w;
  }
  return null;
}

/* ================= 存储 ================= */
let messages = [];
try {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const raw = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  if (Array.isArray(raw)) messages = raw.filter(m => m && typeof m.text === 'string');
} catch (e) {
  messages = [];   // 首次运行或文件损坏，从空列表开始
}

// 串行写盘 + 原子替换，避免并发写坏文件
let writeChain = Promise.resolve();
function persist() {
  writeChain = writeChain.then(() => new Promise(resolve => {
    const tmp = DATA_FILE + '.tmp';
    try {
      fs.writeFileSync(tmp, JSON.stringify(messages.slice(-MAX_KEEP), null, 0), 'utf8');
      fs.renameSync(tmp, DATA_FILE);
    } catch (e) {
      console.error('[留言板] 写入失败：', e.message);
    }
    resolve();
  }));
  return writeChain;
}

/* ================= 限流 ================= */
const hits = new Map();   // ip -> [timestamp]
setInterval(() => {
  const cutoff = Date.now() - WINDOW_MS;
  for (const [ip, arr] of hits) {
    const kept = arr.filter(t => t > cutoff);
    if (kept.length) hits.set(ip, kept); else hits.delete(ip);
  }
}, 10 * 60 * 1000).unref();

function rateCheck(ip) {
  const now = Date.now();
  const arr = hits.get(ip) || [];
  const recent = arr.filter(t => now - t < WINDOW_MS);
  if (arr.length && now - arr[arr.length - 1] < MIN_INTERVAL) {
    return { ok: false, msg: '笔走得太急了，稍候片刻再题字' };
  }
  if (recent.length >= WINDOW_MAX) {
    return { ok: false, msg: '今日墨已用尽，歇歇再来吧' };
  }
  return { ok: true };
}

function recordHit(ip) {
  const arr = hits.get(ip) || [];
  arr.push(Date.now());
  hits.set(ip, arr.filter(t => Date.now() - t < WINDOW_MS));
}

/* ================= 工具 ================= */
function clientIp(req) {
  if (TRUST_PROXY) {
    const xf = req.headers['x-forwarded-for'];
    if (xf) return String(xf).split(',')[0].trim();
    const ri = req.headers['x-real-ip'];
    if (ri) return String(ri).trim();
  }
  return (req.socket && req.socket.remoteAddress) || 'unknown';
}

function send(res, code, data) {
  const body = JSON.stringify(data);
  res.writeHead(code, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Access-Control-Allow-Origin': ALLOW_ORIGIN,
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-admin-token',
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', c => {
      size += c.length;
      if (size > MAX_BODY) { reject(new Error('内容过长')); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'));
      } catch (e) { reject(new Error('请求体不是合法 JSON')); }
    });
    req.on('error', reject);
  });
}

// 去掉控制字符，保留换行；防止注入不可见字符刷屏
function sanitize(s) {
  return String(s)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim();
}

function makeId() {
  return Date.now().toString(36) + '-' + crypto.randomBytes(5).toString('hex');
}

// 对外输出前剥掉 IP，避免把访客 IP 暴露给所有人
function publicView(m) {
  return { id: m.id, name: m.name, text: m.text, time: m.time };
}

/* ================= 路由 ================= */
const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://localhost');
  const p = u.pathname;

  if (req.method === 'OPTIONS') { send(res, 204, {}); return; }

  /* --- 健康检查 --- */
  if (p === '/api/health') {
    send(res, 200, { ok: true, count: messages.length, ts: Date.now() });
    return;
  }

  /* --- 取列表 --- */
  if (p === '/api/messages' && req.method === 'GET') {
    send(res, 200, { ok: true, list: messages.slice(-MAX_KEEP).map(publicView) });
    return;
  }

  /* --- 发表留言 --- */
  if (p === '/api/messages' && req.method === 'POST') {
    const ip = clientIp(req);
    let payload;
    try { payload = await readBody(req); }
    catch (e) { send(res, 400, { ok: false, msg: e.message }); return; }

    const text = sanitize(payload.text || '').slice(0, MAX_LEN);
    const name = sanitize(payload.name || '').slice(0, MAX_NAME) || '无名氏';

    if (!text) { send(res, 400, { ok: false, msg: '墨迹未落，说点什么吧' }); return; }

    // 先做内容校验，再做限流：这样正常用户看到的提示一定对应真实原因
    const bad = hitBadWord(text + ' ' + name);
    if (bad) { send(res, 400, { ok: false, msg: '此言不合山规，请换个说法' }); return; }

    const rc = rateCheck(ip);
    if (!rc.ok) { send(res, 429, { ok: false, msg: rc.msg }); return; }

    // 短时间重复内容
    const dup = messages.some(m => m.text === text && m.ip === ip && Date.now() - m.time < DUP_WINDOW);
    if (dup) { send(res, 429, { ok: false, msg: '这句话你刚写过啦' }); return; }

    const item = { id: makeId(), name, text, time: Date.now(), ip };
    messages.push(item);
    if (messages.length > MAX_KEEP) messages = messages.slice(-MAX_KEEP);
    recordHit(ip);
    await persist();

    send(res, 200, { ok: true, item: publicView(item) });
    return;
  }

  /* --- 删除留言（需管理员口令） --- */
  const mDel = p.match(/^\/api\/messages\/([\w-]+)$/);
  if (mDel && req.method === 'DELETE') {
    const token = String(req.headers['x-admin-token'] || '');
    if (!token || token !== ADMIN_TOKEN) {
      send(res, 401, { ok: false, msg: '口令有误' });
      return;
    }
    const id = mDel[1];
    const before = messages.length;
    messages = messages.filter(m => m.id !== id);
    if (messages.length === before) {
      send(res, 404, { ok: false, msg: '找不到这条留言' });
      return;
    }
    await persist();
    send(res, 200, { ok: true });
    return;
  }

  send(res, 404, { ok: false, msg: 'not found' });
});

server.listen(PORT, HOST, () => {
  console.log('[留言板] 服务已启动：http://' + HOST + ':' + PORT + '  （留言 ' + messages.length + ' 条，敏感词 ' + BAD_WORDS.length + ' 条）');
});

// 敏感词表支持热更新：改完 badwords.txt 无需重启
try {
  fs.watch(WORDS_FILE, () => { loadBadWords(); console.log('[留言板] 敏感词表已热更新：' + BAD_WORDS.length + ' 条'); });
} catch (e) {}
