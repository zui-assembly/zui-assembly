import { DefineComponent, ExtractPropTypes, PropType } from 'vue';

export const virtualScrollListProps = {
  // 虚拟列表的数据源
  dataSources: {
    type: Array,
    default: () => []
  },
  // 数据源的标识
  dataKey: {
    type: String,
    default: 'id'
  },
  // 默认指定渲染个数
  keeps: {
    type: Number,
    default: 30
  },
  // 指定每一项的高度
  sourceSize: {
    type: Number,
    default: 80
  },
  // 用户自定义的渲染组件
  dataComponent: {
    type: [Object, Function] as PropType<DefineComponent<object, object, any>>,
    required: true
  }
} as const;

export const virtualItemProps = {
  source: {
    type: Object,
    default: () => ({})
  },
  uniqueKey: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  component: {
    type: [Object, Function] as PropType<DefineComponent<object, object, any>>,
    required: true
  }
} as const;

export type VirtualScrollListProps = ExtractPropTypes<typeof virtualScrollListProps>;
export type VirtualItemProps = ExtractPropTypes<typeof virtualItemProps>;

export type RangeOptions = {
  start: number;
  end: number;
  padFront: number;
  padBehind: number;
};

export type VirtualOptions = {
  keeps: number;
  buffer: number;
  sourceSize: number;
  uniqueIds: string[];
  offsetTop: number;
};

export type updateType = (range: RangeOptions) => void;
