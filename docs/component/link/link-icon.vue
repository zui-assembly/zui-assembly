<template>
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
