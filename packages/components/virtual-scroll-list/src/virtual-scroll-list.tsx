import { createNamespace } from '@zui-assembly/utils/create';
import { defineComponent, onBeforeMount, onBeforeUnmount, onMounted, ref, toRefs } from 'vue';
import { RangeOptions, virtualScrollListProps } from './props';
import { initVirtual } from './virtual';
import VirtualItem from './virtualItem';

export default defineComponent({
  name: 'ZVirtualScrollList',

  props: virtualScrollListProps,

  setup(props) {
    const Clsb = createNamespace('virtual-scroll-list');
    const { dataComponent: ZComponent, keeps, sourceSize, dataSources, dataKey } = toRefs(props);

    const range = ref<RangeOptions | null>(null);
    const root = ref<HTMLDivElement | null>(null);

    let virtual: ReturnType<typeof initVirtual>;

    const showScrollbar = () => {
      root.value?.classList.remove('hide-scrollbar');
    };

    const hideScrollbar = () => {
      root.value?.classList.add('hide-scrollbar');
    };

    const getUniqueIdFromDataSources = () => {
      return dataSources.value.map((item: any) => item[dataKey.value]);
    };

    const update = (newRange: RangeOptions) => {
      range.value = newRange;
    };

    const installVirtual = () => {
      // 初始化逻辑

      virtual = initVirtual(
        {
          keeps: keeps.value, // 显示区域的item数量
          buffer: Math.round(keeps.value / 3), // 缓冲区域的item数量
          uniqueIds: getUniqueIdFromDataSources(), // 数据源的唯一id
          sourceSize: sourceSize.value, // 数据源的长度
          offsetTop: root.value?.offsetTop as number
        },
        update
      );
    };

    // 初始化 start, end
    onBeforeMount(installVirtual);

    onMounted(() => {
      showScrollbar();
      root.value?.addEventListener('mouseenter', showScrollbar);
      root.value?.addEventListener('mouseleave', hideScrollbar);
    });

    onBeforeUnmount(() => {
      root.value?.removeEventListener('mouseenter', showScrollbar);
      root.value?.removeEventListener('mouseleave', hideScrollbar);
    });

    // 根据计算出的start、end来渲染组件
    const genRenderComponent = () => {
      const slots = [];
      const { start, end } = range.value!;
      for (let i = start; i <= end; i++) {
        const dataSource = dataSources.value[i] as any;
        const uniqueKey = dataSource[dataKey.value];
        if (dataSource) {
          slots.push(
            <VirtualItem
              uniqueKey={uniqueKey}
              source={dataSource}
              component={ZComponent.value}
              onItemResize={onItemResize}
            ></VirtualItem>
          );
        }
      }

      return slots;
    };

    // 获取VirtualItem的组件的高度, 用于分辨其是固定高度还是动态高度
    const onItemResize = (id: string | number, size: number) => {
      virtual.saveSize(id, size);
    };

    const onScroll = () => {
      const offest = root.value?.scrollTop;
      virtual.initScroll(offest as number);
    };

    return () => {
      const { padFront, padBehind } = range.value!;
      const paddingStyle = { padding: `${padFront}px 0px ${padBehind}px` };
      return (
        <div class={Clsb.b()} ref={root} onScroll={onScroll}>
          <div style={paddingStyle}>{genRenderComponent()}</div>
        </div>
      );
    };
  }
});
