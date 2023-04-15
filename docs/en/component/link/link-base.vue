<template>
  <div class="demo-row">
    <z-link>Default</z-link>
    <z-link type="primary">Primary</z-link>
    <z-link type="success">Success</z-link>
    <z-link type="warning">Warning</z-link>
    <z-link type="danger">Danger</z-link>
    <z-link type="info">Info</z-link>
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
