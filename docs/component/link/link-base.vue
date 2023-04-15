<template>
  <div class="demo-row">
    <z-link>默认链接</z-link>
    <z-link type="primary">主要链接</z-link>
    <z-link type="success">成功链接</z-link>
    <z-link type="warning">警告链接</z-link>
    <z-link type="danger">危险链接</z-link>
    <z-link type="info">信息链接</z-link>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
