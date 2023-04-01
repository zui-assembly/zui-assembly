module.exports = {
  title: 'Zui-Assembly',
  description: '🚩UI - component library for Vue3',
  themeConfig: {
    logo: '../public/cat.jpeg',
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    socialLinks: [{ icon: 'github', link: 'https://github.com/zui-assembly/zui-assembly' }],
    repo: 'https://gitee.com/zui-assembly',
    footer: {
      message: 'No license.',
      copyright: 'Copyright © 2023-present MrZ'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quieStart' }
          ]
        }
      ],
      '/component/': [
        {
          text: 'Basic',
          items: [
            { text: 'Icon 图标', link: '/component/icon' },
            { text: 'Button 按钮', link: '/component/button' },
            { text: 'Link 文字链接', link: '/component/link' }
          ]
        },
        {
          text: 'Form',
          items: []
        }
      ]
    }
  }
};
