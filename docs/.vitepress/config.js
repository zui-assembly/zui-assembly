import { applyPlugins } from '@ruabick/md-demo-plugins';
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc';
import { genTemp } from '@ruabick/vite-plugin-gen-temp';
import { defineConfig } from 'vitepress';
import { getChineseThemeConfig, getEnglishThemeConfig } from './sidebar';

const base = process.env.NODE_ENV === 'production' ? '/zui-assembly' : '';

export default defineConfig({
  lang: 'zh-CN',
  lastUpdated: true,
  title: 'Zui-Assembly',
  base,
  importMap: {},
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Zui-Assembly',
      description: '🚩UI-Vue3的组件库'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Zui-Assembly',
      description: '🚩UI - component library for Vue3'
    }
  },
  themeConfig: {
    logo: '../public/logo.svg',
    localeLinks: {
      items: [
        { text: '简体中文', link: '/', base: '/' },
        { text: 'English', link: '/en/', base: '/en/' }
      ]
    },
    locales: {
      '/': getChineseThemeConfig(),
      '/en/': getEnglishThemeConfig()
    },
    algolia: {},
    socialLinks: [{ icon: 'github', link: 'https://github.com/zui-assembly/zui-assembly' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present MrZ'
    }
    // search: {
    //   provider: 'local'
    // }
  },
  vue: {},
  vite: {
    plugins: [genTemp(), genApiDoc()]
    // resolve: {
    //   alias: {}
    // }
  },
  markdown: {
    config: (md) => {
      applyPlugins(md);
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  buildEnd() {
    process.exit(0);
  }
});
