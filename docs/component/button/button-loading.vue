<template>
  <div class="demo-row">
    <z-button type="primary" loading>
      <span>加载中</span>
    </z-button>
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
