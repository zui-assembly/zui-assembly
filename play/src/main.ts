import '@zui-assembly/theme-style/src/index.scss';
import { createApp } from 'vue';
import App from './App.vue';

import { Button, ButtonGroup } from '@zui-assembly/components/button';
import Calendar from '@zui-assembly/components/calendar';
import { Checkbox, CheckboxButton, CheckboxGroup } from '@zui-assembly/components/checkbox';
import Icon from '@zui-assembly/components/icon';
import Link from '@zui-assembly/components/link';
import VirtualScrollList from '@zui-assembly/components/virtual-scroll-list';

const pulgins = [Icon, Button, ButtonGroup, Link, Checkbox, CheckboxGroup, CheckboxButton, Calendar, VirtualScrollList];

const app = createApp(App);
pulgins.forEach((plugin) => app.use(plugin)); // 将组件注册成了全局组件 ，可以直接使用了

app.mount('#app');
