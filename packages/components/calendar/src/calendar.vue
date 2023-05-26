<template>
  <div :class="nsCal.b()">
    <div :class="nsCal.e('header')">
      <div :class="nsCal.e('title')">{{ currentDate }}</div>
      <div v-if="!isRangeValid" :class="bem.b()">
        <z-button type="default" size="small" @click="selectDate('prev-year')">上一年</z-button>
        <z-button type="default" size="small" @click="selectDate('prev-month')">上个月</z-button>
        <z-button type="default" size="small" @click="selectDate('today')">今天</z-button>
        <z-button type="default" size="small" @click="selectDate('next-month')">下个月</z-button>
        <z-button type="default" size="small" @click="selectDate('next-year')">下一年</z-button>
      </div>
    </div>
    <div :class="nsCal.e('body')">
      <table :class="nsTable.b()" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th v-for="day in weekDays" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="!isRangeValid">
            <tr v-for="(row, rid) in rows" :key="rid">
              <td v-for="(cell, cid) in row" :key="cid" :class="getCellClass(cell)" @click="handlePick(cell)">
                <div :class="nsDay.b()">
                  <span>
                    <slot name="date-cell" :data="getSlotData(cell)">
                      {{ cell.text }}
                    </slot>
                  </span>
                </div>
              </td>
            </tr>
          </template>
          <template v-else>
            <tr v-for="(row, rid) in rangeRows" :key="rid">
              <td v-for="(cell, cid) in row" :key="cid" :class="getCellClass(cell)" @click="handleRangePick(cell)">
                <div :class="nsDay.b()">
                  <span>{{ cell }}</span>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@zui-assembly/utils/create';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { computed, ref } from 'vue';
import {
  CalendarDateCell,
  CalendarDateCellType,
  CalendarDateType,
  CalendarProps,
  calendarEmits,
  calendarProps
} from './calendar';

defineOptions({
  name: 'z-calendar'
});

// 组件的 Props 类型
const props: CalendarProps = defineProps(calendarProps);
const emit = defineEmits(calendarEmits);

const nsCal = createNamespace('calendar');
const nsTable = createNamespace('calendar-table');
const nsDay = createNamespace('calendar-day');
const bem = createNamespace('button-group');
const now = dayjs(); // 当前时间

// 用户当前选择的日期
const selectDay = ref<Dayjs>();

// 判断range是否合法
const isRangeValid = computed(() => {
  let flag = false;
  const [firstDayIsWeekStart, lastDayIsWeekEnd] = (props.range as Array<string>) || [];
  if (!firstDayIsWeekStart || !lastDayIsWeekEnd) {
    return false;
  }
  // 判断range的第一项是不是周的开始，即周日
  const _startDate = dayjs(firstDayIsWeekStart);
  // 判断range的第二项是不是周的结束，即周六
  const _endDate = dayjs(lastDayIsWeekEnd);

  const isBefore = _startDate.isBefore(_endDate);

  if (!isBefore) {
    flag = false;
  }

  if (_startDate.day() === 0 && _endDate.day() === 6) {
    // 时间跨度没有超过两个月
    const diffDays = Math.abs(_endDate.diff(_startDate, 'day'));
    const diffMonths = diffDays / 30;

    if (diffMonths <= 2) {
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
});

// 根据 modelValue 判断是否有值，有值则使用 modelValue，没有值则使用当前时间
const date = computed(() => {
  if (!props.modelValue) {
    return now;
  } else if (props.range && isRangeValid.value) {
    return dayjs(props.range[0]);
  }
  return dayjs(props.modelValue);
});

// 0-6 代表周日到周六 获取本周的第一天
const firstWeekDay = dayjs().startOf('week').day();

const weekMaping = ['日', '一', '二', '三', '四', '五', '六'];

// 截取星期数组
const weekDays = computed(() => {
  return [...weekMaping.slice(firstWeekDay), ...weekMaping.slice(0, firstWeekDay)];
});

// 面板的数据格式 [[], [], [], [], [], []]
const rows = computed(() => {
  // 根据用户提供的日期 计算出42个来展示
  // 获取本月的第一天是星期几
  let dateList: CalendarDateCell[] = [];
  // 获取这个月的第一天是周几
  const firstDay = date.value.startOf('month').day();
  // 获取上个月的结束天是多少
  const lastDay = date.value.subtract(1, 'month').endOf('month').date();
  // 计算出上个月剩余几天在当前月中
  const count = firstDay - firstWeekDay;
  const prevMonthDays: CalendarDateCell[] = Array.from({ length: count })
    .map((_, idx) => lastDay - (count - idx - 1))
    .map((_) => {
      return {
        text: _,
        type: 'prev'
      };
    });

  const currentMonthDays: CalendarDateCell[] = Array.from({ length: date.value.daysInMonth() }).map((_, idx) => {
    return {
      text: idx + 1,
      type: 'current'
    };
  });

  dateList = [...prevMonthDays, ...currentMonthDays];

  // 获取下个月的开始天是多少 42 - 本月天数 - 上个月剩余天数
  const nextMonthDays: CalendarDateCell[] = Array.from({ length: 42 - dateList.length }).map((_, idx) => {
    return {
      text: idx + 1,
      type: 'next'
    };
  });

  dateList.push(...nextMonthDays);

  // 组装相应的数据格式
  return Array.from({ length: 6 }).map((_, idx) => {
    const start = idx * 7; // 6 * 7
    return dateList.slice(start, start + 7);
  });
});

// 有 range 指定范围不能超过两个月
const rangeRows = computed(() => {
  const [startDate, endDate] = props.range as Array<string>;

  const diffDays = dayjs(endDate).diff(dayjs(startDate), 'day');
  // , (v, i) => startDate.add(i, 'day').toArray()[2]
  const dateArray = Array.from({ length: diffDays + 1 }, (_, idx) => dayjs(startDate).add(idx, 'day').date());
  console.log('🚀 ~ rangeRows ~ dateArray:', dateArray);

  return Array.from({ length: 8 }).map((_, idx) => {
    const start = idx * 7; // 8 * 7
    return dateArray.slice(start, start + 7);
  });
});

const currentDate = computed(() => {
  return `${date.value.year()}年${date.value.month() + 1}月`;
});

const prevYearDay = computed(() => date.value.subtract(1, 'year').date(1));
const prevMonthDay = computed(() => date.value.subtract(1, 'month').date(1));
const nextYearDay = computed(() => date.value.add(1, 'year').date(1));
const nextMonthDay = computed(() => date.value.add(1, 'month').date(1));

const pickDay = (day: Dayjs) => {
  // 选中保存的日期
  selectDay.value = day;
  // 同步日期
  emit('update:modelValue', day.toDate());
};

const selectDate = (type: CalendarDateType) => {
  const dateMaping: Record<CalendarDateType, Dayjs> = {
    'prev-year': prevYearDay.value,
    'prev-month': prevMonthDay.value,
    today: now,
    'next-month': nextMonthDay.value,
    'next-year': nextYearDay.value
  };

  // 找到日期，更改date日期，自动根据日期来计算rows 📅
  const day = dateMaping[type];
  pickDay(day);
};

// 格式化日期
const formatter = (text: number, type: CalendarDateCellType) => {
  switch (type) {
    case 'prev':
      return date.value.subtract(1, 'month').date(text);
    case 'current':
      return date.value.date(text);
    case 'next':
      return date.value.add(1, 'month').date(text);
  }
};

const handlePick = ({ text, type }: CalendarDateCell) => {
  // 根据text和type获取日期来更新date
  const day = formatter(text, type);

  pickDay(day);
};

const handleRangePick = (text: number) => {
  const day = date.value.date(text);

  pickDay(day);
};

const getCellClass = (cell: CalendarDateCell | number) => {
  // 如果 cell 是对象
  const isObject = typeof cell === 'object';
  const classnames: string[] = [isObject ? cell.type : 'current'];

  const _date = isObject ? formatter(cell.text, cell.type) : date.value.date(cell);

  // 当月的now day
  if (isObject && _date.isSame(now, 'day')) {
    classnames.push(nsDay.is('today', true));
  }

  // 用户选择的日期
  if (_date.isSame(selectDay.value, 'day')) {
    classnames.push(nsDay.is('selected', true));
  }

  return classnames;
};

const getSlotData = ({ text, type }: CalendarDateCell) => {
  const _date = formatter(text, type);

  // 返回插槽数据
  return {
    isSelect: _date.isSame(selectDay.value, 'day'),
    day: _date.format('MM-DD'),
    date: _date.toDate(),
    type
  };
};
</script>

<style lang="scss" scoped></style>
