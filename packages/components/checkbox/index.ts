import { withInstall } from '@zui-assembly/utils/withInstall';
import { DefineComponent, EmitsOptions } from 'vue';
import _Checkbox from './src/checkbox.vue';
import _CheckboxGroup from './src/checkboxGroup.vue';
import { CheckboxEmits, CheckboxGroupProps, CheckboxProps } from './src/props';

const Checkbox = withInstall(
  _Checkbox as DefineComponent<Partial<CheckboxProps>, Record<string, any>, Partial<CheckboxEmits>>
);
const CheckboxGroup = withInstall(
  _CheckboxGroup as DefineComponent<Partial<CheckboxGroupProps>, Record<string, any>, EmitsOptions>
);

export * from './src/props';
export { Checkbox, CheckboxGroup };

export default {}; // 默认导出一个空对象

declare module 'vue' {
  export interface GlobalComponents {
    ZCheckbox: typeof Checkbox;
    ZCheckboxGroup: typeof CheckboxGroup;
  }
}
