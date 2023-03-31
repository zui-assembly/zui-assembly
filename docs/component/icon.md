# Icon 图标

zui-assembly 推荐使用 xicons 作为图标库。

```
$ pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

<script setup lang="ts">
import { GitBranchOutline, TrashOutline, AirplaneOutline } from '@vicons/ionicons5'
</script>

<div class="demo-block demo-icon">
<div class="source">
<div class="demo-row">
<z-icon color="red" size="25">
  <GitBranchOutline/>
</z-icon>

<z-icon color="green" size="25">
  <TrashOutline/>
</z-icon>
<z-icon color="blue" size="25">
  <AirplaneOutline/>
</z-icon>
</div>
</div>

<div class="source">
<div class="demo-row">
<z-icon color="red" size="40">
  <GitBranchOutline/>
</z-icon>

<z-icon color="green" size="40">
  <TrashOutline/>
</z-icon>

<z-icon color="blue" size="40">
  <AirplaneOutline/>
</z-icon>
</div>
</div>
</div>

```vue
<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5';
</script>
<template>
  <z-icon color="red" size="40">
    <CashOutline />
  </z-icon>
</template>
```

## API

### Icon Props

| 参数  | 类型             | 可选 | 说明     | 默认值 |
| ----- | ---------------- | ---- | -------- | ------ |
| color | string           | -    | 图标颜色 | -      |
| size  | number \| string | -    | 图片大小 | -      |

<style>
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
}
.demo-block .source {
  padding: 24px;
}

.demo-block .source .demo-row:not(:last-child) {
  margin-bottom: 20px;
}

.demo-block .source .demo-row .z-button+.z-button {
    margin-left: 10px;
}
</style>
