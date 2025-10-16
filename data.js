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
    desc: "胸怀天下，重情重义。",
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
    desc: "权势之大，威势凌驾众人之上",
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