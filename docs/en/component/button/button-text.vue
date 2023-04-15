<template>
  <div class="demo-row">
    <z-button type="text">Text Button</z-button>
    <z-button type="text" disabled>Text Button</z-button>
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
