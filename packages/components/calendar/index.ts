import { withInstall } from '@zui-assembly/utils/withInstall';
import type { CalendarEmits, CalendarProps } from './src/calendar';
import _Calendar from './src/calendar.vue';

const Calendar = withInstall(_Calendar);

export default Calendar; // app.use(Calendar)

export { CalendarProps, CalendarEmits };

// 提供 ZCalendar 类型给编辑器使用
declare module 'vue' {
  export interface GlobalComponents {
    ZCalendar: typeof Calendar;
  }
}
