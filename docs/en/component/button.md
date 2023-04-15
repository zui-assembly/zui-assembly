# Button

## Basic Usage

<demo src="./button/button-base.vue" desc="Use the type, round, and circle attributes to define the style of the button, and you can set the button icon by specifying the icon slot through the template."></demo>

## Disabled State

<demo src="./button/button-disabled.vue" title="Button Unavailable Status" desc="You can use the: disabled attribute to define whether a button is available, which accepts a Boolean value."></demo>

## Text Button

<demo src="./button/button-text.vue" title="Button without border and background color"></demo>

## Icon Button

<demo src="./button/button-icon.vue" title="Buttons with icons can enhance recognition (with text) or save space (without text)" desc="Specify the icon slot through the template, and the icon of the icon can be introduced in ionicons5. With a text button for the icon, whether the button is on the left or right can be set through icon placement."></demo>

## Button Group

<demo src="./button/button-group.vue" title="Appearing as a button group, commonly used in scenarios with multiple similar operations" desc="Use z-button-group tags to nest your buttons."></demo>

## Loading Status

<demo src="./button/button-loading.vue" title="The button is in the loading state" desc="To set it to the loading state, simply set the loading property to true."></demo>

## Different Sizes

<demo src="./button/button-size.vue" title="The Button component provides three sizes in addition to the default values, allowing you to choose the appropriate button size in different scenarios" desc="Additional dimensions: medium, small, mini, configured by setting the size attribute."></demo>

## API

### Button Props

| Parameter     | Type    | Optional                                                     | Explain               | Default value |
| ------------- | ------- | ------------------------------------------------------------ | --------------------- | ------------- |
| type          | string  | primary / success / warning / danger / info / text / default | Button Type           | -             |
| size          | string  | medium / small / mini / large                                | Button Size           | -             |
| round         | boolean | -                                                            | Rounded Button        | false         |
| circle        | boolean | -                                                            | Circular Button       | false         |
| loading       | boolean | -                                                            | Loading Button        | false         |
| disabled      | boolean | -                                                            | Disabled Button       | false         |
| iconPlacement | string  | left / right                                                 | Icon Position         | -             |
| native-type   | string  | button / submit / reset                                      | Native Type Attribute | button        |

<style>

.demo-block .source .demo-group {
  margin-left: 10px;
}

.description {
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  font-size: 14px;
  line-height: 22px;
  color: #666;
  word-break: break-word;
  margin: 10px;
  background-color: #fff;
}
</style>
