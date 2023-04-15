<template>
  <div class="demo-row">
    <z-link :underline="false">无下划线</z-link>
    <z-link>有下划线</z-link>
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
