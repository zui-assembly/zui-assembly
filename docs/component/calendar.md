# Calendar 日历

显示日历 📅

## 基础用法

<demo src="./calendar/calendar-base.vue" desc="设置 value 来指定当前显示的月份。如果 value 未指定，则显示当月。value 支持 v-model 双向绑定。"></demo>

## 自定义内容

<demo src="./calendar/calendar-custom-content.vue" desc="通过设置名为 dateCell 的简写 #date-cell='{ data }' 来自定义日历单元格中显示的内容, data（包括 type，isSelected，day, date 属性）。"></demo>

## 自定义范围

<demo src="./calendar/calendar-custom-scope.vue" desc="设置 range 属性指定日历的显示范围。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。"></demo>
