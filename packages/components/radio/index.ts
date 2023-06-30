import { withInstall } from '@zui-assembly/utils/withInstall';
import { DefineComponent, EmitsOptions } from 'vue';
import { RadioButtonProps, RadioEmits, RadioGroupEmits, RadioGroupProps, RadioProps } from './src/props';
import _RadioButton from './src/radio-button.vue';
import _RadioGroup from './src/radio-group.vue';
import _Radio from './src/radio.vue';

const Radio = withInstall(_Radio as DefineComponent<Partial<RadioProps>, Record<string, any>, Partial<RadioEmits>>);
const RadioGroup = withInstall(
  _RadioGroup as DefineComponent<RadioGroupProps, Record<string, any>, Partial<RadioGroupEmits>>
);
const RadioButton = withInstall(
  _RadioButton as DefineComponent<Partial<RadioButtonProps>, Record<string, any>, Partial<EmitsOptions>>
);

export * from './src/props';
export { Radio, RadioButton, RadioGroup };

export default {};

declare module 'vue' {
  export interface GlobalComponents {
    ZRadio: typeof Radio;
    ZRadioGroup: typeof RadioGroup;
    zRadioButton: typeof RadioButton;
  }
}
