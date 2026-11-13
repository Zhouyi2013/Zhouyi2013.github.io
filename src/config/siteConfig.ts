import type { SiteConfig } from "@/types/siteConfig";
import { resolvePageToggles } from "../utils/page-toggle-utils";
import { resolveSiteLang } from "../utils/site-config-utils";

// ======================================================
// Zhouyi's Blog - Site Configuration
// 科技简约风 | Technology Blue
// ======================================================

// 站点语言
const SITE_LANG = resolveSiteLang("zh_CN");

// ======================================================
// 页面开关
// ======================================================

const pages = resolvePageToggles({
  // 社交
  friends: true,
  guestbook: true,

  // 个人页面
  dynamic: true,
  projects: true,
  gallery: false,
  booknav: true,

  // 追番页面
  bilibili: true,
  bangumi: false,
  vndb: false,
  mal: false,

  // 关于
  sponsor: false,
});

// ======================================================
// 站点主体配置
// ======================================================

export const siteConfig: SiteConfig = {
  // ----------------------------------------------------
  // 基本信息
  // ----------------------------------------------------

  title: "Zhouyi's Blog",

  subtitle: "于人间烟火处，独守一隅清欢。",

  site_url: "https://zhouyi2013.github.io",

  description: "于人间烟火处，独守一隅清欢。",

  keywords: [
    "Zhouyi2013",
    "Zhouyi",
    "博客",
    "技术博客",
  ],

  // ----------------------------------------------------
  // 主题色
  // ----------------------------------------------------

  themeColor: {
    hue: 250,
    defaultMode: "system",
  },

  // ----------------------------------------------------
  // 页面宽度
  // ----------------------------------------------------

  pageWidth: 100,

  // ----------------------------------------------------
  // 卡片样式
  // ----------------------------------------------------

  card: {
    border: true,
    followTheme: true,
  },

  // ----------------------------------------------------
  // Favicon
  // ----------------------------------------------------

  favicon: [
    {
      src: "http://q1.qlogo.cn/g?b=qq&nk=823672854&s=100",
    },
  ],

  // ----------------------------------------------------
  // 导航栏
  // ----------------------------------------------------

  navbar: {
    logo: {
      type: "url",
      value: "http://q1.qlogo.cn/g?b=qq&nk=823672854&s=100",
      alt: "Zhouyi's Blog",
    },

    title: "Zhouyi's Blog",

    widthFull: false,

    menuAlign: "center",

    followTheme: true,

    navbarMode: "dynamic",
  },

  // ----------------------------------------------------
  // 站点运行时间
  // ----------------------------------------------------

  siteStartDate: "2013-06-04",

  timezone: "Asia/Shanghai",

  // ----------------------------------------------------
  // 分类导航栏
  // ----------------------------------------------------

  categoryBar: true,

  categoryStyle: "rectangle",

  // ----------------------------------------------------
  // 标签样式
  // ----------------------------------------------------

  tagStyle: "pill",

  // ----------------------------------------------------
  // 归档页面
  // ----------------------------------------------------

  foldArticle: true,

  // ====================================================
  // 文章列表
  // ====================================================

  postListLayout: {
    // 桌面端列表
    defaultMode: "list",

    // 移动端网格
    mobileDefaultMode: "grid",

    // 封面位置
    coverPosition: "right",

    // 简介显示行数
    descriptionLines: 3,

    // 统计图标
    showStatsIcons: true,

    // 标签显示在底部
    tagsPosition: "bottom",

    // 底部标签样式
    tagsBottomStyle: "chip",

    // 元数据
    meta: {
      showPublished: true,
      showCategory: true,
      showTags: true,
      tagCount: 0,
      showWords: false,
      showReadingTime: false,
    },

    // 底部统计
    stats: {
      showPublished: true,
      showWords: true,
      showReadingTime: true,
    },

    // 网格配置
    grid: {
      masonry: true,
      columnWidth: 320,
      coverFullWidth: false,
    },
  },

  // ====================================================
  // 分页
  // ====================================================

  pagination: {
    postsPerPage: 6,
  },

  // ====================================================
  // 文章详情页
  // ====================================================

  post: {
    // 提示框
    rehypeCallouts: {
      theme: "vitepress",

      // Python Markdown 语法兼容
      enablePythonMarkdownAdmonitions: true,
    },

    // 编辑时间
    showLastModified: true,

    outdatedThreshold: 30,

    // 分享
    share: true,

    // 上一篇 / 下一篇
    postNavigation: true,

    // 相关文章
    relatedPosts: true,

    // 随机文章
    randomPosts: true,

    // OpenGraph
    generateOgImages: true,

    // 沉浸式阅读
    immersiveReading: {
      enable: true,

      defaultOn: false,

      tocEnabled: true,

      tocPosition: "left",
    },
  },

  // ====================================================
  // Bilibili
  // ====================================================

  bilibili: {
    uid: "5214272",
  },

  // ====================================================
  // Bangumi
  // ====================================================

  bangumi: {
    userId: "1143164",

    mode: "dynamic",

    apiUrl: "https://api.bangumi.pro",

    subjectBaseUrl: "https://api.bangumi.pro/subject/",

    categoryOrder: [
      "anime",
      "book",
      "music",
      "game",
    ],

    nsfw: "hide",
  },

  // ====================================================
  // VNDB
  // ====================================================

  vndb: {
    userId: "u358128",

    mode: "static",

    downloadCovers: false,

    apiUrl: "https://api.vndb.org/kana",

    vnBaseUrl: "https://vndb.org/",

    apiToken: "",

    nsfw: "hide",
  },

  // ====================================================
  // MyAnimeList
  // ====================================================

  mal: {
    username: "cuteleaf",

    clientId: "0ef34371450f9c6c809deaadec6aa8f3",

    apiUrl: "https://api.myanimelist.net/v2",

    animeBaseUrl: "https://myanimelist.net/anime/",

    mangaBaseUrl: "https://myanimelist.net/manga/",

    nsfw: "hide",
  },

  // ====================================================
  // 图片优化
  // ====================================================

  imageOptimization: {
    // WebP
    formats: "webp",

    // 压缩质量
    quality: 70,

    // 防盗链兼容
    noReferrerDomains: [
      "*.hdslb.com",
      "*.bilibili.com",
      "*.myanimelist.net",
      "*.vndb.org",
      "*.qlogo.cn",
    ],
  },

  // ====================================================
  // RSS / Atom
  // ====================================================

  feed: {
    contentMode: "full",
  },

  // ====================================================
  // 语言
  // ====================================================

  lang: SITE_LANG,

  // ====================================================
  // 页面开关
  // ====================================================

  pages,
};