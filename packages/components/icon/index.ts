import { withInstall } from '@zui-assembly/utils/withInstall';
import _Icon from './src/icon.vue';

const Icon = withInstall(_Icon);

export default Icon; // 可以通过 app.use 来使用，也可以通过 import 方式单独使用

export * from './src/icon';

// 给 vue 提供全局组件类型声明
declare module 'vue' {
  interface GlobalComponents {
    ZIcon: typeof Icon;
  }
}
