import { withInstall } from '@zui-assembly/utils/withInstall';
import _Link from './src/link.vue';

const Link = withInstall(_Link);

export default Link;

export * from './src/link';

declare module 'vue' {
  interface GlobalComponents {
    ZLink: typeof Link;
  }
}
