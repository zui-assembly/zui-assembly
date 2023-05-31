import { withInstall } from '@zui-assembly/utils/withInstall';
import { DefineComponent, EmitsOptions } from 'vue';
import { LinkProps } from './src/link';
import _Link from './src/link.vue';

const Link = withInstall(_Link as DefineComponent<Partial<LinkProps>, Record<string, any>, EmitsOptions>);

export default Link;

export * from './src/link';

declare module 'vue' {
  export interface GlobalComponents {
    ZLink: typeof Link;
  }
}
