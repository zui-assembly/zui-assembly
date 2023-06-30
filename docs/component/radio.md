# Radio 单选框

在一组备选项中进行单选

## 基础用法

要使用 Radio 组件，只需要设置 `v-model` 绑定变量， 选中意味着变量的值为相应 Radio `label` 属性的值， `label` 可以是 `String` 、`Number` 或 `Boolean`。

<demo src="./radio/radio-base.vue" desc="单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。"></demo>

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

<demo src="./radio/radio-disabled.vue" desc="你只需要为单选框设置 disabled 属性就能控制其禁用状态。"></demo>

## 单选框组

适用于在多个互斥的选项中选择的场景

结合 `z-radio-group` 元素和子元素 `z-radio` 可以实现单选组， 为 `z-radio-group` 绑定 `v-model`，再为 每一个 `z-radio` 设置好 `label` 属性即可， 另外，还可以通过 `change` 事件来响应变化，它会传入一个参数 `value` 来表示改变之后的值。

<demo src="./radio/radio-group.vue"></demo>

## 按钮样式

让单选框看起来像一个按钮一样。

只需要把 `z-radio` 元素换成 `z-radio-button` 元素即可， 此外，Zui Assembly 还提供了 `size` 属性用来控制单选框的大小。

<demo src="./radio/radio-button.vue"></demo>

## 带有边框

设置 `border` 属性为 `true` 可以渲染为带有边框的单选框。

<demo src="./radio/radio-border.vue"></demo>
