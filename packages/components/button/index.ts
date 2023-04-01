import { withInstall } from '@zui-assembly/utils/withInstall';
import _Button from './src/button.vue';
import _ButtonGroup from './src/buttonGroup.vue';

const Button = withInstall(_Button);
const ButtonGroup = withInstall(_ButtonGroup);
export * from './src/button';
export { Button, ButtonGroup };

export default {}; // 默认导出一个空对象

declare module 'vue' {
  interface GlobalComponents {
    ZButton: typeof Button;
    ZButtonGroup: typeof ButtonGroup;
  }
}
