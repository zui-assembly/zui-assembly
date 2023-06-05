# Checkbox 多选框

一组备选项中进行多选 ✅

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<demo src="./checkbox/checkbox-base.vue" desc="在 el-checkbox 元素中定义 v-model 绑定变量，单一的 checkbox 中，默认绑定变量的值会是Boolean，选中为true。"></demo>

## 禁用状态

多选框不可用状态。

<demo src="./checkbox/checkbox-disabled.vue" desc="设置disabled属性即可。"></demo>

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<demo src="./checkbox/checkbox-group.vue" desc="checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 v-model 绑定 Array 类型的变量即可。 el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。"></demo>

## indeterminate 状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

<demo src="./checkbox/checkbox-indeterminate.vue"></demo>

## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量

<demo src="./checkbox/checkbox-min-max.vue"></demo>

## 带有边框

设置 `border` 属性可以渲染为带有边框的多选框

<demo src="./checkbox/checkbox-border.vue"></demo>
