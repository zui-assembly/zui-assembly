import { ExtractPropTypes, InjectionKey, PropType } from 'vue';

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
  // 选中时的值
  trueLabel: {
    type: [String, Number] as PropType<string | number>
  },
  // 没有选中时的值
  falseLabel: {
    type: [String, Number] as PropType<string | number>
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
} as const;

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<string[] | number[]>,
    default: () => [] as string[] | number[]
  },
  // 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效
  size: {
    type: String as PropType<Size>,
    default: 'default'
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
    type: String
  },
  fill: {
    type: String
  }
} as const;

export const checkboxButtonProps = {
  // 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）
  label: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>
  },
  // 选中时的值
  trueLabel: {
    type: [String, Number] as PropType<string | number>
  },
  // 没有选中时的值
  falseLabel: {
    type: [String, Number] as PropType<string | number>
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 原生 name 属性
  name: {
    type: String
  },
  // 当前是否勾选
  checked: {
    type: Boolean,
    default: false
  }
} as const;

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
export type CheckboxButtonProps = ExtractPropTypes<typeof checkboxButtonProps>;
export type CheckboxEmits = typeof checkboxEmits;
export type CheckboxGroupEmits = typeof checkboxGroupEmits;

export type CheckboxGroupContext = Partial<CheckboxGroupProps> &
  Partial<{
    groupChecked: string[] | number[];
    changeGroupModel: (value: string[] | number[]) => void;
  }>;

export type CheckboxComponentProps = {
  modelValue?: string | number | boolean;
  label?: string | number | boolean;
  trueLabel?: string | number;
  falseLabel?: string | number;
  disabled?: boolean;
  border?: boolean;
  size?: Size;
  indeterminate?: boolean;
  checked?: boolean;
};

export const checkGroupKey: InjectionKey<CheckboxGroupContext> = Symbol('checkGroupKey');
