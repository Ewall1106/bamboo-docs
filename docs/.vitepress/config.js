export default {
  title: "BAMBOO",
  lastUpdated: true,
  locales: {
    "/": {
      lang: "en-US",
    },
    "/zh/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    logo: '/assets/logo.png',

    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Ewall1106/bamboo-ui" },
    ],
  },
};
