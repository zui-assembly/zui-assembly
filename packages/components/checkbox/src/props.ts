import { ExtractPropTypes, PropType } from 'vue';

export type Size = 'large' | 'default' | 'small';

export const checkboxProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: false
  },
  // 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）
  label: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: ''
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否显示边框
  border: {
    type: Boolean,
    default: false
  },
  // Checkbox的尺寸，仅在border为真时有效
  size: {
    type: String as PropType<Size>,
    default: 'default'
  },
  // 原生name
  name: {
    type: String,
    default: ''
  },
  // 选中状态
  checked: {
    type: Boolean,
    default: false
  },
  // 设置 indeterminate 状态，只负责样式控制
  indeterminate: {
    type: Boolean,
    default: false
  }
};

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<string[] | number[]>,
    default: () => [] as string[] | number[]
  },
  // 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效
  size: {
    type: String as PropType<Size>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  min: {
    type: Number
  },
  max: {
    type: Number
  },
  textColor: {
    type: String,
    default: '#ffffff'
  },
  fill: {
    type: String,
    default: '#409EFF'
  }
};

export const checkboxEmits = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  change: (value: string | number | boolean) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'update:modelValue': (value: string | number | boolean) => true
};

export const checkboxGroupEmits = {
  change: (value: string[] | number[]) => value,
  'update:modelValue': (value: string[] | number[]) => value
};

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export type CheckboxEmits = typeof checkboxEmits;
export type CheckboxGroupEmits = typeof checkboxGroupEmits;

export type CheckboxGroupProvide = Partial<CheckboxGroupProps> &
  Partial<{
    groupChecked: string[] | number[];
    changeGroupModel: (value: string[] | number[]) => void;
  }>;
