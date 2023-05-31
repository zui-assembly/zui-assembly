# Calendar

Display Calendar 📅

## Basic Usage

<demo src="./calendar/calendar-base.vue" desc="Set value to specify the month currently displayed. If value is not specified, the current month is displayed. Value supports V-model bidirectional binding."></demo>

## Custom Content

<demo src="./calendar/calendar-custom-content.vue" desc="Customize the content displayed in calendar cells by setting the abbreviation # date cell='{data}' named dateCell, including the type, isSelected, day, and date attributes."></demo>

## Custom Scope

<demo src="./calendar/calendar-custom-scope.vue" desc="Set the range property to specify the display range of the calendar. The start time must be the start day of the week, the end time must be the end day of the week, and the time span cannot exceed two months."></demo>
