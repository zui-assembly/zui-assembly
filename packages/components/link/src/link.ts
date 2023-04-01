import { ExtractPropTypes, PropType } from 'vue';

export type LinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type Placement = 'left' | 'right';

export const linkProps = {
  type: {
    type: String as PropType<LinkType>,
    default: 'default'
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  href: String,
  icon: String,
  iconPlacement: {
    type: String as PropType<Placement>,
    default: ''
  }
} as const;

export type LinkProps = ExtractPropTypes<typeof linkProps>;
