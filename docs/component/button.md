# Button 按钮

## 基础用法

<demo src="./button/button-base.vue" desc="使用 type、round 和 circle 属性来定义 Button 的样式，并且可以通过 template 指定 icon 图标插槽来设置按钮图标。"></demo>

## 禁用状态

<demo src="./button/button-disabled.vue" title="按钮不可用状态" desc="可以使用：disabled 属性来定义按钮是否可用，它接受一个 Boolean 值。"></demo>

## 文字按钮

<demo src="./button/button-text.vue" title="没有边框和背景色的按钮"></demo>

## 图标按钮

<demo src="./button/button-icon.vue" title="带图标的按钮可增强辨识度（有文字）或节省空间（无文字）" desc="通过 template 指定 icon 图标插槽，icon的图标可以在 ionicons5 中去引入，带有 icon 的文字按钮，指定按钮在左还是右边可以通过 icon-placement 来设置 left 或 right。"></demo>

## 按钮组

<demo src="./button/button-group.vue" title="以按钮组的方式出现，常用于多项类似操作的场景" desc="使用 z-button-group 标签来嵌套你的按钮。"></demo>

## 加载中状态

<demo src="./button/button-loading.vue" title="按钮处于加载中状态" desc="要设置为 loading 状态，只要设置 loading 属性为 true 即可。"></demo>

## 不同尺寸

<demo src="./button/button-size.vue" title="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸" desc="额外的尺寸：medium、small、mini，通过设置 size 属性来配置它们。"></demo>

## API

### Button Props

| 参数          | 类型    | 可选值                                                       | 说明           | 默认值 |
| ------------- | ------- | ------------------------------------------------------------ | -------------- | ------ |
| type          | string  | primary / success / warning / danger / info / text / default | 按钮类型       | -      |
| size          | string  | medium / small / mini / large                                | 按钮大小       | -      |
| round         | boolean | -                                                            | 是否圆角按钮   | false  |
| circle        | boolean | -                                                            | 是否圆形按钮   | false  |
| loading       | boolean | -                                                            | 是否加载中状态 | false  |
| disabled      | boolean | -                                                            | 是否禁用状态   | false  |
| iconPlacement | string  | left / right                                                 | 图标位置       | -      |
| native-type   | string  | button / submit / reset                                      | 原生 type 属性 | button |

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
