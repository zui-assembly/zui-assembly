import { ExtractPropTypes, PropType } from 'vue';

export type Placement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

// 简单的类型定义
export const tooltip = {
  content: String,
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  }
} as const;

export type Tooltip = ExtractPropTypes<typeof tooltip>;
