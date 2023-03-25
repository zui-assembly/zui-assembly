import { ExtractPropTypes, PropType } from 'vue';

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<string | number>
} as const;

// 组件类型导出
export type IconProps = ExtractPropTypes<typeof iconProps>;
