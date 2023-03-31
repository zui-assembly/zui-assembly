# Button 按钮

## 基础用法

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

<script setup lang="ts">
import { ChevronBack, ChevronForward, AirplaneOutline, GitBranchOutline, TrashOutline, PersonOutline, CloudUploadOutline, LockClosedOutline, FileTrayFullOutline } from '@vicons/ionicons5';
</script>
<div class="demo-block demo-button">
<div class="source">
<div class="demo-row">
<z-button type="default">
  默认按钮
</z-button>

<z-button type="primary">
  主要按钮
</z-button>

<z-button type="success">
  成功按钮
</z-button>

<z-button type="info">
  信息按钮
</z-button>

<z-button type="warning">
  警告按钮
</z-button>

<z-button type="danger">
  危险按钮
</z-button>
</div>

<div class="demo-row">
<z-button type="default" round>
  圆角按钮
</z-button>
<z-button type="primary" round>
  主要按钮
</z-button>
<z-button type="success" round>
  成功按钮
</z-button>
<z-button type="info" round>
  信息按钮
</z-button>
<z-button type="warning" round>
  警告按钮
</z-button>
<z-button type="danger" round>
  危险按钮
</z-button>
</div>

<div class="demo-row">
<z-button type="default" icon-placement="left" circle>
  <template #icon>
    <AirplaneOutline />
  </template>
</z-button>
<z-button type="primary" icon-placement="left" circle>
  <template #icon>
    <GitBranchOutline />
  </template>
</z-button>
<z-button type="success" icon-placement="left" circle>
  <template #icon>
    <TrashOutline />
  </template>
</z-button>
<z-button type="info" icon-placement="left" circle>
  <template #icon>
    <PersonOutline />
  </template>
</z-button>
<z-button type="warning" icon-placement="left" circle>
  <template #icon>
    <CloudUploadOutline />
  </template>
</z-button>
<z-button type="danger" icon-placement="left" circle>
  <template #icon>
    <LockClosedOutline />
  </template>
</z-button>
</div>
</div>
</div>
<div class="description">使用 <code>type</code>、<code>round</code> 和 <code>circle</code>属性来定义 Button 的样式，并且可以通过 <code>template</code> 指定 <code>icon</code> 图标插槽来设置按钮图标。</div>

```vue
<template>
  // 默认
  <z-button type="default">默认按钮</z-button>
  <z-button type="primary">主要按钮</z-button>
  <z-button type="success">成功按钮</z-button>
  <z-button type="info">信息按钮</z-button>
  <z-button type="warning">警告按钮</z-button>
  <z-button type="danger">危险按钮</z-button>

  // 圆角
  <z-button type="default" round>默认按钮</z-button>
  <z-button type="primary" round>主要按钮</z-button>
  <z-button type="success" round>成功按钮</z-button>
  <z-button type="info" round>信息按钮</z-button>
  <z-button type="warning" round>警告按钮</z-button>
  <z-button type="danger" round>危险按钮</z-button>

  // 圆形图标
  <z-button type="default" icon-placement="left" circle>
    <template #icon>
      <AirplaneOutline />
    </template>
  </z-button>
  <z-button type="primary" icon-placement="left" circle>
    <template #icon>
      <GitBranchOutline />
    </template>
  </z-button>
  <z-button type="success" icon-placement="left" circle>
    <template #icon>
      <TrashOutline />
    </template>
  </z-button>
  <z-button type="info" icon-placement="left" circle>
    <template #icon>
      <PersonOutline />
    </template>
  </z-button>
  <z-button type="warning" icon-placement="left" circle>
    <template #icon>
      <CloudUploadOutline />
    </template>
  </z-button>
  <z-button type="danger" icon-placement="left" circle>
    <template #icon>
      <LockClosedOutline />
    </template>
  </z-button>
</template>
```

## 禁用状态

- 按钮不可用状态

<div class="demo-block demo-button">
<div class="source">
<div class="demo-row">
<z-button type="default" disabled>
  默认按钮
</z-button>

<z-button type="primary" disabled>
  主要按钮
</z-button>

<z-button type="success" disabled>
  成功按钮
</z-button>

<z-button type="info" disabled>
  信息按钮
</z-button>

<z-button type="warning" disabled>
  警告按钮
</z-button>

<z-button type="danger" disabled>
  危险按钮
</z-button>
</div>
</div>
</div>
<div class="description">可以使用：<code>disabled</code> 属性来定义按钮是否可用，它接受一个 <code>Boolean</code> 值。</div>

```vue
<template>
  <z-button type="default" disabled>默认按钮</z-button>
  <z-button type="primary" disabled>主要按钮</z-button>
  <z-button type="success" disabled>成功按钮</z-button>
  <z-button type="info" disabled>信息按钮</z-button>
  <z-button type="warning" disabled>警告按钮</z-button>
  <z-button type="danger" disabled>危险按钮</z-button>
</template>
```

## 文字按钮

- 没有边框和背景色的按钮

<div class="demo-block demo-button">
<div class="source">
<div class="demo-row">
<z-button type="text">文本按钮</z-button>
<z-button type="text" disabled>文本按钮</z-button>
</div>
</div>
</div>

```vue
<template>
  <z-button type="text">文本按钮</z-button>
  <z-button type="text" disabled>文本按钮</z-button>
</template>
```

## 图标按钮

- 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）

<div class="demo-block demo-button">
<div class="source">
<div class="demo-row">
<z-button type="primary" icon-placement="left">
    <template #icon>
      <AirplaneOutline />
    </template>
  </z-button>
  <z-button type="primary" icon-placement="left">
    <template #icon>
      <GitBranchOutline />
    </template>
  </z-button>
  <z-button type="primary" icon-placement="left">
    <template #icon>
      <TrashOutline />
    </template>
  </z-button>
  <z-button type="primary" icon-placement="left">
    <template #icon>
      <PersonOutline />
    </template>
    <span>用户</span>
  </z-button>

  <z-button type="primary" icon-placement="right">
    <template #icon>
      <CloudUploadOutline />
    </template>
    上传
  </z-button>
</div>
</div>
</div>
<div class="description">通过 <code>template</code> 指定 <code>icon</code> 图标插槽，icon的图标可以在 ionicons5 中去引入，带有 icon 的文字按钮，指定按钮在左还是右边可以通过 <code>icon-placement</code> 来设置 <code>left</code> 或 <code>right</code>。</div>

```vue
<template>
  <z-button type="primary" icon-placement="left">
    <template #icon>
      <AirplaneOutline />
    </template>
  </z-button>
  <z-button type="primary" icon-placement="left">
    <template #icon>
      <GitBranchOutline />
    </template>
  </z-button>
  <z-button type="primary" icon-placement="left">
    <template #icon>
      <TrashOutline />
    </template>
  </z-button>
  <z-button type="primary" icon-placement="left">
    <template #icon>
      <PersonOutline />
    </template>
    <span>用户</span>
  </z-button>

  <z-button type="primary" icon-placement="right">
    <template #icon>
      <CloudUploadOutline />
    </template>
    上传
  </z-button>
</template>
```

## 按钮组

- 以按钮组的方式出现，常用于多项类似操作的场景

<div class="demo-block demo-button">
<div class="source">
<z-button-group>
  <z-button type="primary" icon-placement="left">
    <template #icon>
      <ChevronBack />
    </template>
    上一页
  </z-button>
  <z-button type="primary" icon-placement="right">
    <template #icon>
      <ChevronForward />
    </template>
    下一页
  </z-button>
</z-button-group>
<span class="demo-group"></span>
<z-button-group>
  <z-button type="primary" icon-placement="left">
    <template #icon>
      <FileTrayFullOutline />
    </template>
  </z-button>
  <z-button type="primary" icon-placement="right">
    <template #icon>
      <GitBranchOutline />
    </template>
  </z-button>
  <z-button type="primary" icon-placement="right">
    <template #icon>
      <TrashOutline />
    </template>
  </z-button>
</z-button-group>
</div>
</div>
<div class="description">使用 <code>z-button-group</code> 标签来嵌套你的按钮。</div>

```vue
<template>
  // 两个按钮组
  <z-button-group>
    <z-button type="primary" icon-placement="left">
      <template #icon>
        <ChevronBack />
      </template>
      上一页
    </z-button>
    <z-button type="primary" icon-placement="right">
      <template #icon>
        <ChevronForward />
      </template>
      下一页
    </z-button>
  </z-button-group>

  // 三个按钮组
  <z-button-group>
    <z-button type="primary" icon-placement="left">
      <template #icon>
        <FileTrayFullOutline />
      </template>
    </z-button>
    <z-button type="primary" icon-placement="right">
      <template #icon>
        <GitBranchOutline />
      </template>
    </z-button>
    <z-button type="primary" icon-placement="right">
      <template #icon>
        <TrashOutline />
      </template>
    </z-button>
  </z-button-group>
</template>
```

## 加载中状态

- 按钮处于加载中状态

<div class="demo-block demo-button">
<div class="source">
<div class="demo-row">
<z-button type="primary" loading>
  <span>加载中</span>
</z-button>
</div>
</div>
</div>
<div class="description">要设置为 loading 状态，只要设置 <code>loading</code> 属性为 <code>true</code> 即可。</div>

```vue
<template>
  <z-button type="primary" loading>
    <span>加载中</span>
  </z-button>
</template>
```

## 不同尺寸

- Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸

<div class="demo-block demo-button">
<div class="source">
<div class="demo-row">
<z-button type="default">
  默认按钮
</z-button>

<z-button type="default" size="medium">
  中等按钮
</z-button>

<z-button type="default" size="small">
  小型按钮
</z-button>

<z-button type="default" size="mini">
  迷你按钮
</z-button>
</div>
<div class="demo-row">
<z-button type="default" round>
  默认按钮
</z-button>

<z-button type="default" size="medium" round>
  中等按钮
</z-button>

<z-button type="default" size="small" round>
  小型按钮
</z-button>

<z-button type="default" size="mini" round>
  迷你按钮
</z-button>
</div>
</div>
</div>
<div class="description">额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置 <code>size</code> 属性来配置它们。</div>

```vue
<template>
  <z-button type="default">默认按钮</z-button>
  <z-button type="default" size="medium">中等按钮</z-button>
  <z-button type="default" size="small">小型按钮</z-button>
  <z-button type="default" size="mini">迷你按钮</z-button>
</template>

<template>
  <z-button type="default" round>默认按钮</z-button>
  <z-button type="default" size="medium" round>中等按钮</z-button>
  <z-button type="default" size="small" round>小型按钮</z-button>
  <z-button type="default" size="mini" round>迷你按钮</z-button>
</template>
```

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
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
}
.demo-block .source {
  padding: 24px;
}

.demo-block .source .demo-group {
  margin-left: 10px;
}

.demo-block .source .demo-row:not(:last-child) {
  margin-bottom: 20px;
}

.demo-block .source .demo-row .z-button+.z-button {
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
