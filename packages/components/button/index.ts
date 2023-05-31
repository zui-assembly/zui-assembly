import { withInstall } from '@zui-assembly/utils/withInstall';
import { DefineComponent, EmitsOptions } from 'vue';
import { ButtonEmits, ButtonProps } from './src/button';
import _Button from './src/button.vue';
import _ButtonGroup from './src/buttonGroup.vue';

const Button = withInstall(_Button as DefineComponent<Partial<ButtonProps>, Record<string, any>, ButtonEmits>);
const ButtonGroup = withInstall(_ButtonGroup as DefineComponent<object, object, EmitsOptions>);
export * from './src/button';
export { Button, ButtonGroup };

export default {}; // 默认导出一个空对象

declare module 'vue' {
  export interface GlobalComponents {
    ZButton: typeof Button;
    ZButtonGroup: typeof ButtonGroup;
  }
}
