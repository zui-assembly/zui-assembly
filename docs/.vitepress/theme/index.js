// 引入vitepress的默认主题
import DefaultTheme from 'vitepress/theme';

import ZIcon from '@zui-assembly/components/icon';
import '@zui-assembly/theme-style/src/index.scss';

// DefaultTheme中的Layout组件, 用于渲染页面; 可以在这里添加一些全局的样式
// DefaultTheme中的NotFound组件, 用于渲染404页面
console.log(DefaultTheme, '🚀--');

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon); // 在vitepress中 注册全局组件
  }
};
