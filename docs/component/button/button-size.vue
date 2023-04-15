<template>
  <div class="demo-row">
    <z-button type="default">默认按钮</z-button>

    <z-button type="default" size="medium">中等按钮</z-button>

    <z-button type="default" size="small">小型按钮</z-button>

    <z-button type="default" size="mini">迷你按钮</z-button>
  </div>

  <div class="demo-row">
    <z-button type="default" round>默认按钮</z-button>

    <z-button type="default" size="medium" round>中等按钮</z-button>

    <z-button type="default" size="small" round>小型按钮</z-button>

    <z-button type="default" size="mini" round>迷你按钮</z-button>
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
