// 引入vitepress的默认主题
import DemoBlock from '@zui-assembly/markdown-demo-block';
import '@zui-assembly/markdown-demo-block/dist/style.css';
import DefaultTheme from 'vitepress/theme';
import './var.css';

import { Button as ZButton, ButtonGroup as ZButtonGroup } from '@zui-assembly/components/button';
import ZCalendar from '@zui-assembly/components/calendar';
import {
  Checkbox as ZCheckbox,
  CheckboxButton as ZCheckboxButton,
  CheckboxGroup as ZCheckboxGroup
} from '@zui-assembly/components/checkbox';
import ZIcon from '@zui-assembly/components/icon';
import ZLink from '@zui-assembly/components/link';
import ZVirtualScrollList from '@zui-assembly/components/virtual-scroll-list';
import '@zui-assembly/theme-style/src/index.scss';

const Components = [
  ZButton,
  ZButtonGroup,
  ZVirtualScrollList,
  ZCalendar,
  ZIcon,
  ZLink,
  ZCheckbox,
  ZCheckboxGroup,
  ZCheckboxButton
];

// DefaultTheme中的Layout组件, 用于渲染页面; 可以在这里添加一些全局的样式
// DefaultTheme中的NotFound组件, 用于渲染404页面

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 在vitepress中 注册全局组件
    Components.forEach((component) => {
      app.use(component);
    });

    app.component('demo', DemoBlock);
  }
};
