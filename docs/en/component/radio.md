# Radio

Make a single choice among a set of options

## Basic Usage

To use the Radio component, simply set the `v-model` binding variable. Selecting it means that the value of the variable is the value of the corresponding Radio `label` attribute, which can be `String`, `Number`, or `Boolean`。

<demo src="./radio/radio-base.vue" desc="Radio boxes should not have too many options. If you have many options, you should use a selection box instead of a radio box."></demo>

## Disabled State

The `disabled` attribute can be used to control the disabled state of the radio box.

<demo src="./radio/radio-disabled.vue" desc="You only need to set the disabled property for the radio box to control its disabled state."></demo>

## Radio Group

Suitable for scenarios selected among multiple mutually exclusive options.

By combining the `z-radio` group element and the sub element `z-radio`, a single selection group can be achieved. Bind the v-model to the `z-radio-group`, and then set the label attribute for each `z-radio`. Additionally, the change event can be used to respond to changes, passing in a parameter value to represent the changed value.

<demo src="./radio/radio-group.vue"></demo>

## Button Style

Make the radio box look like a button.

Simply replace the `z-radio` element with the `z-radio-button` element, and `Zui Assembly` also provides the `size` attribute to control the size of the radio box.

<demo src="./radio/radio-button.vue"></demo>

## With Border

Setting the `border` attribute to `true` can render as a radio box with a border.

<demo src="./radio/radio-border.vue"></demo>
