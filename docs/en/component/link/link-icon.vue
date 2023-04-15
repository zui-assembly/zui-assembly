<template>
  <div class="demo-row">
    <z-link icon-placement="left">
      <template #icon><ChatboxEllipsesOutline /></template>
      Info
    </z-link>
    <z-link icon-placement="right">
      <template #icon><EyeSharp /></template>
      View
    </z-link>
  </div>
</template>

<script lang="ts" setup>
import { ChatboxEllipsesOutline, EyeSharp } from '@vicons/ionicons5';
</script>

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
