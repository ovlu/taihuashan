// 本地自测：启动服务 -> 跑一遍接口 -> 退出
const { spawn } = require('child_process');
const path = require('path');

const srv = spawn('node', [path.join(__dirname, 'msg-server.js')], {
  env: Object.assign({}, process.env, { ADMIN_TOKEN: 'testtoken123', MSG_PORT: '3999' }),
  stdio: ['ignore', 'pipe', 'pipe']
});
srv.stdout.on('data', d => process.stdout.write('[srv] ' + d));
srv.stderr.on('data', d => process.stdout.write('[err] ' + d));

const BASE = 'http://127.0.0.1:3999/api';
const sleep = ms => new Promise(r => setTimeout(r, ms));

function post(body, headers) {
  return fetch(BASE + '/messages', {
    method: 'POST',
    headers: Object.assign({ 'Content-Type': 'application/json' }, headers || {}),
    body: JSON.stringify(body)
  }).then(r => r.json());
}
const get = () => fetch(BASE + '/messages').then(r => r.json());
function del(id, token) {
  return fetch(BASE + '/messages/' + id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'x-admin-token': token }
  }).then(r => r.json());
}

(async () => {
  await sleep(800);
  console.log('\n=== 1. 正常留言 ===');
  const a = await post({ name: '青衫客', text: '太华山风景独好，此行不虚！' });
  console.log(a.ok ? '  OK  ' + a.item.name + '：' + a.item.text : '  FAIL', a.msg || '');

  console.log('\n=== 2. 10 秒内重复提交（限流） ===');
  const b = await post({ name: '手快', text: '再来一条' });
  console.log('  ', b.ok ? 'FAIL 未被限流' : 'OK 已拦截：' + b.msg);

  console.log('\n=== 3. 敏感词（含空格绕过） ===');
  const c = await post({ name: '广告哥', text: '代练接单，加微 信详聊' });
  console.log('  ', c.ok ? 'FAIL 未拦截' : 'OK 已拦截：' + c.msg);

  console.log('\n=== 4. 空白内容 ===');
  const d = await post({ name: '空', text: '    ' });
  console.log('  ', d.ok ? 'FAIL' : 'OK 已拦截：' + d.msg);

  console.log('\n=== 4b. 重复内容（5 分钟内） ===');
  await sleep(10500);
  const r1 = await post({ name: '复读', text: '一模一样的一句话' });
  await sleep(10500);
  const r2 = await post({ name: '复读', text: '一模一样的一句话' });
  console.log('  ', r1.ok && !r2.ok ? 'OK 已拦截：' + r2.msg : 'FAIL');

  console.log('\n=== 5. 超长截断 ===');
  await sleep(10500);
  const long = '长'.repeat(200);
  const e = await post({ name: '啰嗦', text: long });
  console.log('  ', e.ok ? 'OK 已截断为 ' + e.item.text.length + ' 字' : 'FAIL ' + e.msg);

  console.log('\n=== 6. 取列表 ===');
  await sleep(10500);
  const g = await post({ name: '西柚柚', text: '刚入山门，请多关照～' });
  const list = await get();
  console.log('  OK 共 ' + list.list.length + ' 条：' + list.list.map(m => m.name).join(' / '));
  console.log('  不下发 IP：', list.list.every(m => m.ip === undefined) ? 'OK' : 'FAIL');

  console.log('\n=== 7. 删除（错误口令） ===');
  const wrong = await del(list.list[0].id, 'bad-token');
  console.log('  ', wrong.ok ? 'FAIL' : 'OK 已拒绝：' + wrong.msg);

  console.log('\n=== 8. 删除（正确口令） ===');
  const ok = await del(list.list[0].id, 'testtoken123');
  const after = await get();
  console.log('  ', ok.ok && after.list.length === list.list.length - 1
    ? 'OK 删除成功，剩余 ' + after.list.length + ' 条'
    : 'FAIL');

  console.log('\n=== 9. 持久化（重启后仍在） ===');
  srv.kill();
  await sleep(500);
  const srv2 = spawn('node', [path.join(__dirname, 'msg-server.js')], {
    env: Object.assign({}, process.env, { ADMIN_TOKEN: 'testtoken123', MSG_PORT: '3999' }),
    stdio: 'ignore'
  });
  await sleep(900);
  const after2 = await get();
  console.log('  ', after2.list.length === after.list.length
    ? 'OK 重启后仍有 ' + after2.list.length + ' 条'
    : 'FAIL 丢失数据');

  console.log('\n=== 10. XSS 转义检查（服务端原样存，前端 textContent 渲染） ===');
  await sleep(10500);
  const x = await post({ name: '<img src=x>', text: '<script>alert(1)</script>' });
  console.log('  原样存储：', x.item.text === '<script>alert(1)</script>' ? 'OK（渲染层转义）' : 'FAIL');

  srv2.kill();
  await sleep(300);
  console.log('\n自测结束');
  process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });
