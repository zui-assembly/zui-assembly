import { withInstall } from '@zui-assembly/utils/withInstall';
import type { VirtualItemProps, VirtualScrollListProps } from './src/props';
import _VirtualScrollList from './src/virtual-scroll-list';

const VirtualScrollList = withInstall(_VirtualScrollList);

export default VirtualScrollList; // app.use(VirtualScrollList)

export { VirtualScrollListProps, VirtualItemProps };

// 提供 ZVirtualScrollList 类型给编辑器使用
declare module 'vue' {
  export interface GlobalComponents {
    ZVirtualScrollList: typeof VirtualScrollList;
  }
}
