<template>
  <div class="demo-row">
    <z-link :underline="false">No Underline</z-link>
    <z-link>Underlined</z-link>
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
