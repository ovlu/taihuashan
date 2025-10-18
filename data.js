// 组织活动数据
const organizationsData = [
  {
    id: 'five_person_dungeon',
    name: '试剑-五人本',
    description: '百业同心，携手并进，共破五人之境！',
    host: '百业成员',
    time: '任何时间',
    location: '任何地点',
    image: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760108111155_qdqqd_izvn5a.jpg'
  },
  {
    id: 'ten_person_dungeon',
    name: '百业侠境十人本',
    description: '群英聚义，共赴双境，笑破双十之关！（百业本+十人本）',
    host: '百业成员',
    time: '首班车周一/二晚上7.40+ | 末班车周六/周日百业战后',
    location: '百业驻地',
    image: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760112376788_qdqqd_1cghz6.jpg'
  },
{
    id: 'ten_person_dungeon',
    name: '百业战',
    description: '群雄齐聚，比拼剑术，釜底抽薪，偷走发财树，百业战联赛震撼来袭!',
    host: '百业成员（需报名）',
    time: '周六/周日晚上8.30 ',
    location: '百业驻地',
    image: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760114923629_qdqqd_8y3qse.png'
  },
  {
    id: '30_person_dungeon',
    name: '百业派对',
    description: '独乐乐不如众乐乐,群友齐聚,不亦乐乎！',
    host: '百业成员',
    time: '每天7.30',
    location: '百业驻地',
    image: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760115796163_qdqqd_0eu04g.jpg'
  }

];

// 演示视频数据
const demoVideos = [
  {
    id: '1',
    name: '抖音混剪视频',
    // 大屏幕(1200px及以上)使用iframe嵌入
    iframeUrl: 'https://open.douyin.com/player/video?vid=7556637118593305915&autoplay=0',
    // 小屏幕(1199px及以下)使用video标签，将视频缩小分辨率后，上传到图床得到的链接
    videoUrl: 'https://coss.yupoo.com/upchat/2025-10-12/1760199631095.mp4',
    // 强制在所有分辨率下都使用video标签（优先级高于iframe）true是强制，flase 不强制
    forceUseVideo: false
  },
  {
    id: '2',
    name: '背景视频',
    // 大屏幕使用iframe（如果有的话，否则使用video）
    iframeUrl: 'https://open.douyin.com/player/video?vid=7559060766079520052&autoplay=0',
    // 小屏幕使用video标签，将视频缩小分辨率后，上传到图床得到的链接
    videoUrl: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760199885609_qdqqd_fg9gle.mp4',
    // 强制在所有分辨率下都使用video标签，true是强制，flase 不强制
    forceUseVideo: false
  },
  {
    id: '3',
    name: '抖音混剪视频2',
    // 大屏幕使用iframe嵌入
    iframeUrl: 'https://open.douyin.com/player/video?vid=7547670257420717321&autoplay=0',
    // 小屏幕使用video标签（备用视频），将视频缩小分辨率后，上传到图床得到的链接
    videoUrl: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760199964628_qdqqd_s5ynkm.mp4',
    // 强制在所有分辨率下都使用video标签，true是强制，flase 不强制
    forceUseVideo: false
  }
];

// 角色数据管理
const characterData = [
  {
    
    name: "名福禄",
    title: "社主",
    desc: "年少心高与天齐，手持残阳破长空！",
    tags: ["照顾萌新", "仁心若水", "一帮之主"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760185287230_qdqqd_kicrk5.png",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760188962521_qdqqd_jkible.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189044399_qdqqd_dnhnfk.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760188109355_qdqqd_kahocl.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760188189116_qdqqd_vydlvd.jpg"
    ]
  },
  {
    
    name: "权威御姐",
    title: "副社主",
    desc: "她，生于风雪之间，行于人心之外。冷若冰霜，却从不负情。一声令下，百业肃然；一抹微笑，众生皆醉。她以威服人，以善渡人。太华山中，无人不敬其名——那位被称作天下第一的权威御姐——",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760185226692_qdqqd_l4cwmx.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
 {
    
    name: "希阿容博",
    title: "神一道天",
    desc: "我顾及的事情太多，身体也不太好，胳膊肘和膝盖火辣辣的疼。",
    tags: ["腰缠万贯", "聚沙成塔", "金光灿灿"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760534884150_qdqqd_q5hqu1.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760534167439_qdqqd_o62mau.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760534114188_qdqqd_1wmqea.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760534124076_qdqqd_tmr1qg.jpg",
    ]
  },
 {
    
    name: "顾熙",
    title: "天玄",
    desc: "顾太华破敌阵，熙星映剑证无名。",
    tags: ["破军战神", "沉浸肝游", "威而不怒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760268233751_qdqqd_j9nrg3.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265956042_qdqqd_hrb7s5.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265974951_qdqqd_8lkdau.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265993232_qdqqd_lha83p.png",
    ]
  },
{
    
    name: "殁凉",
    title: "天玄",
    desc: "殁问江湖痴情客，凉州月满渡佳人。",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278597553_qdqqd_553w2u.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278377998_qdqqd_ighqfm.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278356680_qdqqd_d8gdm9.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278408053_qdqqd_pjbsrg.png"
    ]
  },
{
    
    name: "期风",
    title: "天玄",
    desc: "期待风云再起时，快意恩仇侠客行。",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760268302022_qdqqd_rxulbf.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265563434_qdqqd_af9q0k.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265653187_qdqqd_0h4doy.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265749185_qdqqd_by9vds.png",
    ]
  },
{
    
    name: "哥舒大炮",
    title: "天玄",
    desc: "别人笑我太疯癫，我笑他人看不穿。",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278455914_qdqqd_2c037v.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278215517_qdqqd_1og0ik.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278237785_qdqqd_883iep.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278259383_qdqqd_qsjof0.png"
    ]
  },
{
    
    name: "玉卮",
    title: "天玄",
    desc: "混点好啊，混点秒啊",
    tags: ["战地余孽", "守望余孽", "活跃余孽"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760279078226_qdqqd_yr2whb.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278923294_qdqqd_rymo3o.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760279212626_qdqqd_ymthex.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760279217040_qdqqd_ppmaqx.jpg"
    ]
  },
{
    
    name: "可&甜",
    title: "可甜啦&可白甜馨",
    desc: "老婆姓可我名甜。",
    tags: ["可可甜甜", "相亲相爱", "羡煞旁人"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760533942330_qdqqd_mesiqa.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760533758585_qdqqd_k5jr2q.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760533872805_qdqqd_n1w9e8.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760533891222_qdqqd_52zs3d.jpg",
    ]
  },
{
    
    name: "宁不野",
    title: "天玄",
    desc: "宁鳖",
    tags: ["洲之余孽", "沉迷堵桥", "决战航天"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760268283758_qdqqd_k28uns.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265585215_qdqqd_wct0ke.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265596227_qdqqd_0o5ung.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265609440_qdqqd_kqahg3.png",
    ]
  },
{
    
    name: "筱八",
    title: "天玄",
    desc: "在吗？看看腿",
    tags: ["积极分子", "好战分子", "红温分子"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441530898_qdqqd_xwli5n.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441198265_qdqqd_gifjju.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441203249_qdqqd_0bajg0.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441206647_qdqqd_hp8k2r.avif"
    ]
  },
{
    
    name: "春烟客",
    title: "天玄",
    desc: "我从恍颓中睁眼，亦从灰烬中重燃。",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760268191109_qdqqd_0a6qnn.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760266169023_qdqqd_uh1vcu.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760266475679_qdqqd_23sy24.jpg",
    ]
  },
{
    
    name: "墨谏",
    title: "天玄",
    desc: "寻找寒姨·····",
    tags: ["大医疗师", "高而冷", "肝帝"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278669449_qdqqd_ii3x0h.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278366160_qdqqd_xtp3n1.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278341385_qdqqd_tj8qm0.png"
    ]
  },
{
    
    name: "小柠猫",
    title: "天玄",
    desc: "滴cp一起玩，不网恋不奔现。",
    tags: ["太华画师", "当代毕加索", "cpdd"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278818305_qdqqd_ithlq2.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278689422_qdqqd_pa7hde.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278687778_qdqqd_ahmsze.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760278690496_qdqqd_z5suuz.jpg"
    ]
  },
{
    
    name: "劫云霜",
    title: "天玄",
    desc: "标题",
    tags: ["沉迷王者", "整日摸鱼", "就是牢劫"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760268257086_qdqqd_d0wxzt.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265691139_qdqqd_yl6u07.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265638457_qdqqd_an4lrk.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265756475_qdqqd_9juhl6.png",
    ]
  },
{
    
    name: "小马嘚嘚跑",
    title: "天玄",
    desc: "嗒嗒哒哒~咴儿咴儿~嘚嘚嘚嘚~聿聿~踏踏踏踏~嗷！",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar32.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265006617_qdqqd_vhmdxx.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265027491_qdqqd_5398pm.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265046533_qdqqd_pi4sbl.png",
    ]
  },
{
    
    name: "锦鲤小猪",
    title: "天玄",
    desc: "大师，我的七情六欲怎么只剩食欲了？",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441274784_qdqqd_3z6b75.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441008122_qdqqd_s1l6vi.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441007427_qdqqd_ymdx03.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441003604_qdqqd_l3p05b.avif"
    ]
  },
{
    
    name: "是西柚柚",
    title: "天玄",
    desc: "霖霖是皇帝 霖霖是我最后的安全防线",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760268319444_qdqqd_8pyct3.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265235284_qdqqd_6inqcv.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265243798_qdqqd_88vgob.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760265291263_qdqqd_1jjs0r.png",
    ]
  },
{
    
    name: "苏樾黎",
    title: "天玄",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441469366_qdqqd_1uime0.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441211490_qdqqd_c0jp61.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441213534_qdqqd_upd365.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760441207409_qdqqd_nsi9qy.avif"
      ]
  },
{
    
    name: "京北王",
    title: "天玄",
    desc: "深爱三角洲。",
    tags: ["洲之余孽", "上任副社", "可惜退游"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar22.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760534335606_qdqqd_wwsqyv.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760534542580_qdqqd_7q3qls.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_1_885190757_1760534551848_qdqqd_o93z4z.jpg"
    ]
  },
{
    
    name: "駱儿",
    title: "天玄",
    desc: "冷若寒锋，心似数据流。她通晓术法与机理，指尖起落间可令千门响应。无情于人，却沉迷于代码的秩序。她以一己之力，编织出太华山的虚拟圣域——此地，由她亲手创造！",
    tags: ["冷颜断义", "眼似秋霜", "威仪天成"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760268419904_qdqqd_1d7rxf.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760271346969_qdqqd_tqx2gj.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760271404930_qdqqd_2ahqn6.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760274818213_qdqqd_7nl0tj.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760274886617_qdqqd_1tbci8.png",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760268920753_qdqqd_js9lvx.png",
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760277994006_qdqqd_sdw2x0.png"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },
{
    
    name: "名字",
    title: "成员",
    desc: "标题",
    tags: ["风华绝代", "权倾太华", "威而不怒"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189988713_qdqqd_ixxge8.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760189978374_qdqqd_d2rw5w.webp",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760190711809_qdqqd_ibvjff.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1760191549087_qdqqd_byme46.jpg"
    ]
  },


]

// 工具函数
function getOrganizationById(id) {
  return organizationsData.find(org => org.id === id);
}

function getCharacterById(id) {
  return characterData.find(char => char.id === id);
}