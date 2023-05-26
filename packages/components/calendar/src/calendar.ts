import { ExtractPropTypes, PropType } from 'vue';

export const calendarProps = {
  // v-model - modelValue + update:modelValue
  modelValue: {
    type: Date
  },
  // 时间范围，包括开始时间与结束时间
  range: {
    type: Array as any as PropType<[string, string]>
  }
} as const;

// Calendar属性相关类型
export type CalendarProps = ExtractPropTypes<typeof calendarProps>;

// Calendar事件相关类型
export const calendarEmits = {
  'update:modelValue': (value: Date) => value instanceof Date
};

export type CalendarEmits = typeof calendarEmits;

export type CalendarDateCellType = 'prev' | 'current' | 'next';
export type CalendarDateCell = {
  text: number;
  type: CalendarDateCellType;
};

export type CalendarDateType = 'prev-year' | 'prev-month' | 'today' | 'next-month' | 'next-year';
