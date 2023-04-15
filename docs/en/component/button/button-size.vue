<template>
  <div class="demo-row">
    <z-button type="default">Default</z-button>

    <z-button type="default" size="medium">Medium</z-button>

    <z-button type="default" size="small">Small</z-button>

    <z-button type="default" size="mini">Mini</z-button>
  </div>

  <div class="demo-row">
    <z-button type="default" round>Default</z-button>

    <z-button type="default" size="medium" round>Medium</z-button>

    <z-button type="default" size="small" round>Small</z-button>

    <z-button type="default" size="mini" round>Mini</z-button>
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
