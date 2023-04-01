# Link 文字链接

文字超链接

## 基础用法

- 基础的文字链接用法。

<script setup lang="ts">
import { ChatboxEllipsesOutline, EyeSharp } from '@vicons/ionicons5';
</script>

<div class="demo-block demo-button">
<div class="source">
<div class="demo-row">
  <z-link>默认链接</z-link>
  <z-link type="primary">主要链接</z-link>
  <z-link type="success">成功链接</z-link>
  <z-link type="warning">警告链接</z-link>
  <z-link type="danger">危险链接</z-link>
  <z-link type="info">信息链接</z-link>
</div>
</div>
</div>

```vue
<template>
  <z-link>默认链接</z-link>
  <z-link type="primary">主要链接</z-link>
  <z-link type="success">成功链接</z-link>
  <z-link type="warning">警告链接</z-link>
  <z-link type="danger">危险链接</z-link>
  <z-link type="info">信息链接</z-link>
</template>
```

## 禁用状态

- 文字链接不可用状态。

<div class="demo-block demo-button">
<div class="source">
<div class="demo-row">
  <z-link disabled>默认链接</z-link>
  <z-link type="primary" disabled>主要链接</z-link>
  <z-link type="success" disabled>成功链接</z-link>
  <z-link type="warning" disabled>警告链接</z-link>
  <z-link type="danger" disabled>危险链接</z-link>
  <z-link type="info" disabled>信息链接</z-link>
</div>
</div>
</div>

```vue
<template>
  <z-link disabled>默认链接</z-link>
  <z-link type="primary" disabled>主要链接</z-link>
  <z-link type="success" disabled>成功链接</z-link>
  <z-link type="warning" disabled>警告链接</z-link>
  <z-link type="danger" disabled>危险链接</z-link>
  <z-link type="info" disabled>信息链接</z-link>
</template>
```

## 下划线

- 文字链接下划线。

<div class="demo-block demo-button">
<div class="source">
<div class="demo-row">
  <z-link :underline="false">无下划线</z-link>
  <z-link>有下划线</z-link>
</div>
</div>
</div>

```vue
<template>
  <z-link :underline="false">无下划线</z-link>
  <z-link>有下划线</z-link>
</template>
```

## 图标

- 带图标的文字链接可增强辨识度。

<div class="demo-block demo-button">
<div class="source">
<div class="demo-row">
  <z-link icon-placement="left">
    <template #icon><ChatboxEllipsesOutline /></template>
    信息
  </z-link>
  <z-link icon-placement="right">
    <template #icon><EyeSharp /></template>
    查看
  </z-link>
</div>
</div>
</div>

```vue
<template>
  <z-link icon-placement="left">
    <template #icon><ChatboxEllipsesOutline /></template>
    信息
  </z-link>
  <z-link icon-placement="right">
    <template #icon><EyeSharp /></template>
    查看
  </z-link>
</template>
```

## API

### Link Props

| 参数      | 类型    | 可选                                        | 说明           | 默认值  |
| --------- | ------- | ------------------------------------------- | -------------- | ------- |
| type      | string  | primary / success / warning / danger / info | 类型           | default |
| underline | boolean | -                                           | 是否下划线     | true    |
| disabled  | boolean | -                                           | 是否禁用状态   | false   |
| href      | string  | -                                           | 原生 href 属性 | -       |
| icon      | string  | -                                           | 图标类名       | -       |

<style scope>
/* // 覆盖默认样式 */
.vp-doc a[class*="z-link--default"] {
  color: #606266;
}
.vp-doc a[class*="z-link--default"]:hover {
  color: #409eff;
}
.vp-doc a[class*="z-link--primary"] {
  color: #409eff;
}
.vp-doc a[class*="z-link--success"] {
  color: #67c23a;
}
.vp-doc a[class*="z-link--warning"] {
  color: #e6a23c;
}
.vp-doc a[class*="z-link--danger"] {
  color: #f56c6c;
}
.vp-doc a[class*="z-link--info"] {
  color: #909399;
}
</style>
