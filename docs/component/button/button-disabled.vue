<template>
  <div class="demo-row">
    <z-button type="default" disabled>默认按钮</z-button>
    <z-button type="primary" disabled>主要按钮</z-button>
    <z-button type="success" disabled>成功按钮</z-button>
    <z-button type="info" disabled>信息按钮</z-button>
    <z-button type="warning" disabled>警告按钮</z-button>
    <z-button type="danger" disabled>危险按钮</z-button>
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
