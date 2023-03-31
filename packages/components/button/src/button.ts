// 存储组件的属性和相关事件

import { ExtractPropTypes, PropType } from 'vue';

// size 组件的大小
// type 颜色展现类型
// round 是否为圆角
// loading 是否按钮正在加载
// disabled 是否禁用按钮
// native-type 原始类型
// icon-placement 图标的位置

// 插槽 icon

export type Size = 'small' | 'medium' | 'large' | 'mini';
export type Type = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default' | 'text' | '';
export type NativeType = 'button' | 'submit' | 'reset';
export type Placement = 'left' | 'right';

export const buttonProps = {
  size: String as PropType<Size>,
  type: {
    type: String as PropType<Type>,
    validator: (val: string) => {
      // 自定义校验器
      return ['primary', 'success', 'warning', 'danger', 'info', 'default', 'text', ''].includes(val);
    },
    default: 'primary'
  },
  round: Boolean,
  loading: Boolean,
  disabled: Boolean,
  circle: Boolean,
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  },
  iconPlacement: {
    type: String as PropType<Placement>,
    default: ''
  }
} as const;
export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent
  // ...
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
