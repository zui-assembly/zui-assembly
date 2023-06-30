import { ExtractPropTypes, InjectionKey, PropType } from 'vue';

export type Size = 'large' | 'default' | 'small';

export type BaseType = string | number | boolean;

export const radioProps = {
  /* v-model绑定值 */
  modelValue: {
    type: [String, Number, Boolean] as PropType<BaseType>
  },
  /* 单选框的值 */
  label: {
    type: [String, Number, Boolean] as PropType<BaseType>
  },
  /* 是否禁用单选框 */
  disabled: {
    type: Boolean,
    default: false
  },
  /* 是否显示边框 */
  border: {
    type: Boolean,
    default: false
  },
  /* 单选框的尺寸 */
  size: {
    type: String as PropType<Size>
  },
  /* 原生 name 属性 */
  name: {
    type: String
  },
  /* 当前是否选中 */
  checked: {
    type: Boolean,
    default: false
  }
};

export const radioGroupProps = {
  /* v-model绑定值 */
  modelValue: {
    type: [String, Number, Boolean] as PropType<BaseType>,
    default: ''
  },
  /* 单选框按钮或边框按钮的大小 */
  size: {
    type: String as PropType<Size>
  },
  /* 是否禁用 */
  disabled: {
    type: Boolean as PropType<boolean>
  },
  /* 按钮形式的 Radio 激活时的文本颜色 */
  textColor: {
    type: String
  },
  /* 按钮形式的 Radio 激活时的填充色和边框色 */
  fill: {
    type: String
  },
  /* 与 RadioGroup 中的 aria-label 属性相同 */
  label: {
    type: String
  },
  /* 原生 name 属性 */
  name: {
    type: String
  },
  /* 原生 id 属性 */
  id: {
    type: String
  }
};

export const radioButtonProps = {
  /* 单选框的值 */
  label: {
    type: [String, Number, Boolean] as PropType<BaseType>
  },
  /* 是否禁用单选框 */
  disabled: {
    type: Boolean
  },
  /* 原生 name 属性 */
  name: {
    type: String
  },
  /* 当前是否选中 */
  checked: {
    type: Boolean,
    default: false
  }
};

export const radioEmits = {
  change: (value: BaseType) => value,
  'update:modelValue': (value: BaseType) => value
};

export const radioGroupEmits = {
  change: (value: BaseType) => value,
  'update:modelValue': (value: BaseType) => value
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>;
export type RadioEmits = typeof radioEmits;
export type RadioGroupEmits = typeof radioEmits;

export type RadioGroupContext = Partial<RadioGroupProps> &
  Partial<{
    groupChecked: BaseType;
    changeGroupModel: (value: BaseType) => void;
  }>;

export type RadioComponentProps = Partial<{
  modelValue: BaseType;
  border: boolean;
  size: Size;
  label: BaseType;
  disabled: boolean;
  name: string;
  checked: boolean;
}>;

export const radioGroupKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupKey');
export const radioModelKey: InjectionKey<
  () => {
    groupChecked: BaseType;
  }
> = Symbol('radioModelKey');
