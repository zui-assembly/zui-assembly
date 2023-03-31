import { withInstall } from '@zui-assembly/utils/withInstall';
import { ButtonEmits, ButtonProps } from './src/button';
import _Button from './src/button.vue';
import _ButtonGroup from './src/buttonGroup.vue';

const Button = withInstall(_Button);
const ButtonGroup = withInstall(_ButtonGroup);
export { Button, ButtonGroup };
export type { ButtonEmits, ButtonProps };

export default {}; // 默认导出一个空对象

declare module 'vue' {
  interface GlobalComponents {
    ZButton: typeof Button;
    ZButtonGroup: typeof ButtonGroup;
  }
}
