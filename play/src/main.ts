import '@zui-assembly/theme-style/src/index.scss';
import { createApp } from 'vue';
import App from './App.vue';

import Icon from '@zui-assembly/components/icon';

const pulgins = [Icon];

const app = createApp(App);
pulgins.forEach((plugin) => app.use(plugin)); // 将组件注册成了全局组件 ，可以直接使用了

app.mount('#app');
