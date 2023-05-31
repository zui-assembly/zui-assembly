export function getChineseThemeConfig() {
  return {
    nav: [
      { text: '指南', link: '/guide/index', activeMatch: '/guide/' },
      { text: '组件', link: '/component/demo', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: 'guide/quieStart' },
            { text: '安装', link: '/guide/installation' }
          ],
          collapsible: true
        }
      ],
      '/component/': [
        {
          text: 'Basic',
          items: [
            { text: 'Demo', link: '/component/demo' },
            { text: 'Icon 图标', link: '/component/icon' },
            { text: 'Button 按钮', link: '/component/button' },
            { text: 'Link 文字链接', link: '/component/link' }
          ],
          collapsible: true
        },
        {
          text: 'Form',
          items: [
            { text: 'Radio 单选框', link: '/component/radio' },
            { text: 'Checkbox 多选框', link: '/component/checkbox' },
            { text: 'Select 选择器', link: '/component/select' },
            { text: 'Upload 上传', link: '/component/upload' }
          ],
          collapsible: true
        },
        {
          text: 'Others',
          items: [
            { text: 'Calendar 日历', link: '/component/calendar' },
            { text: 'VirtualScrollList 无限滚动', link: '/component/virtual-scroll-list' }
          ]
        }
      ]
    }
    // ... ...
  };
}

export function getEnglishThemeConfig() {
  return {
    nav: [
      { text: 'Guide', link: '/en/guide/index', activeMatch: '/en/guide/' },
      { text: 'Component', link: '/en/component/demo', activeMatch: '/en/component/' }
    ],
    sidebar: {
      '/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Install', link: '/en/guide/installation' },
            { text: 'Quick Start', link: '/en/guide/quieStart' }
          ],
          collapsible: true
        }
      ],
      '/en/component/': [
        {
          text: 'Basic',
          items: [
            { text: 'Demo', link: '/en/component/demo' },
            { text: 'Icon', link: '/en/component/icon' },
            { text: 'Button', link: '/en/component/button' },
            { text: 'Link', link: '/en/component/link' }
          ]
        },
        {
          text: 'Form',
          items: [
            { text: 'Radio', link: '/en/component/radio' },
            { text: 'Checkbox', link: '/en/component/checkbox' },
            { text: 'Select', link: '/en/component/select' },
            { text: 'Upload', link: '/en/component/upload' }
          ],
          collapsible: true
        },
        {
          text: 'Others',
          items: [
            { text: 'Calendar', link: '/en/component/calendar' },
            { text: 'VirtualScrollList', link: '/en/component/virtual-scroll-list' }
          ],
          collapsible: true
        }
      ]
    }
    // ... ...
  };
}
