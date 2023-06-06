import { withInstall } from '@zui-assembly/utils/withInstall';
import { DefineComponent, EmitsOptions } from 'vue';
import _CheckboxButton from './src/checkbox-button.vue';
import _CheckboxGroup from './src/checkbox-group.vue';
import _Checkbox from './src/checkbox.vue';
import { CheckboxButtonProps, CheckboxEmits, CheckboxGroupProps, CheckboxProps } from './src/props';

const Checkbox = withInstall(
  _Checkbox as DefineComponent<Partial<CheckboxProps>, Record<string, any>, Partial<CheckboxEmits>>
);
const CheckboxGroup = withInstall(
  _CheckboxGroup as DefineComponent<Partial<CheckboxGroupProps>, Record<string, any>, EmitsOptions>
);
const CheckboxButton = withInstall(
  _CheckboxButton as DefineComponent<Partial<CheckboxButtonProps>, Record<string, any>, EmitsOptions>
);

export * from './src/props';
export { Checkbox, CheckboxGroup, CheckboxButton };

export default {}; // 默认导出一个空对象

declare module 'vue' {
  export interface GlobalComponents {
    ZCheckbox: typeof Checkbox;
    ZCheckboxGroup: typeof CheckboxGroup;
    ZCheckboxButton: typeof CheckboxButton;
  }
}
