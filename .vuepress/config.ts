import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {}
    }),
    base: "/",
    title: "白桃与猫11",
    description: "life is like a cup of latte, and cat will make it unlonely",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    // https://github.com/vuepress-reco/vuepress-theme-reco/blob/main/packages/vuepress-theme-reco/src/types/options.ts
    theme: recoTheme({
        style: "@vuepress-reco/style-default",
        primaryColor: "#93B5E3",
        logo: "/logo.png",
        author: "illusionno",
        authorAvatar: "/avatar.jpg",
        lastUpdatedText: "最近更新",
        navbar: [
            { text: "首页1", link: "/", icon: "Home" },
            { text: "分类", link: "/categories/qianduan/1/", icon: "Category" },
            { text: "标签", link: "/tags/javaScript/1/", icon: "Tag" },
            { text: "时间轴", link: "/timeline", icon: "Time" },
            { text: "留言板", link: "/docs/message-board", icon: "Chat" },
            { text: "CSDN", link: "https://blog.csdn.net/qq_52395343?spm=1000.2115.3001.5343", icon: "Blog" },
            { text: "Github", link: "https://github.com/illusionno", icon: "LogoGithub" }
        ],
        commentConfig: {
            type: "valine",
            options: {
                appId: "LBASBrPjFEdXbUphmWzeoJfv-gzGzoHsz", // your appId
                appKey: "kXE2hLXZ8J0iLym26zsMh6BO" // your appKey
            }
        }
    }),
    plugins: [
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ["miku", "whiteCat", "haru1", "haru2", "haruto", "koharu", "izumi", "shizuku", "wanko", "blackCat", "z16"],
                clean: false,
                messages: {
                    welcome: "欢迎来到我的博客",
                    home: "心里的花，我想要带你回家。",
                    theme: "好吧，希望你能喜欢我的其他小伙伴。",
                    close: "你不喜欢我了吗？痴痴地望着你。"
                },
                messageStyle: { right: "68px", bottom: "290px" },
                width: 250,
                height: 320
            }
        ],
        [
            "@vuepress-reco/vuepress-plugin-bgm-player",
            {
                audios: [
                    {
                        name: "LOSER",
                        artist: "米津玄師",
                        url: "https://www.ytmp3.cn/down/73654.mp3",
                        cover: "https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200"
                    }
                ],
                // 是否默认缩小
                autoShrink: true,
                // 缩小时缩为哪种模式
                shrinkMode: "float",
                // 悬浮窗样式
                floatStyle: { bottom: "10px", "z-index": "999999" }
            }
        ],
        [
            "@vuepress-reco/vuepress-plugin-bulletin-popover",
            {
                title: "公告",
                body: [
                    {
                        type: "title",
                        content: "欢迎加我的QQ/vx 🎉🎉🎉",
                        style: "text-aligin: center;"
                    },
                    {
                        type: "text",
                        content: "QQ/VX：1349320519",
                        style: "text-align: center;"
                    },
                    {
                        type: "text",
                        content: "喜欢的主题特效可以去个人信息",
                        style: "text-align: center;"
                    },
                    {
                        type: "text",
                        content: "友链或疑问均可在留言板给我留言",
                        style: "text-align: center;"
                    }
                ],
                footer: [
                    {
                        type: "button",
                        text: "打赏",
                        link: "/blog/donate"
                    }
                ]
            }
        ],
        [
            "vuepress-plugin-cursor-effects",
            {
                size: 2, // size of the particle, default: 2
                shape: "circle", // shape of the particle, default: 'star'
                zIndex: 999999999 // z-index property of the canvas, default: 999999999
            }
        ],
        [
            "ribbon-animation",
            {
                size: 90, // 默认数据
                opacity: 0.3, //  透明度
                zIndex: -1, //  层级
                opt: {
                    // 色带HSL饱和度
                    colorSaturation: "80%",
                    // 色带HSL亮度量
                    colorBrightness: "60%",
                    // 带状颜色不透明度
                    colorAlpha: 0.65,
                    // 在HSL颜色空间中循环显示颜色的速度有多快
                    colorCycleSpeed: 6,
                    // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
                    verticalPosition: "center",
                    // 到达屏幕另一侧的速度有多快
                    horizontalSpeed: 200,
                    // 在任何给定时间，屏幕上会保留多少条带
                    ribbonCount: 2,
                    // 添加笔划以及色带填充颜色
                    strokeSize: 0,
                    // 通过页面滚动上的因子垂直移动色带
                    parallaxAmount: -0.5,
                    // 随着时间的推移，为每个功能区添加动画效果
                    animateSections: true
                },
                ribbonShow: false, //  点击彩带  true显示  false为不显示
                ribbonAnimationShow: true // 滑动彩带
            }
        ]
    ]
});
