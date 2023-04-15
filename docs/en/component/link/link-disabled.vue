<template>
  <div class="demo-row">
    <z-link disabled>Default</z-link>
    <z-link type="primary" disabled>Primary</z-link>
    <z-link type="success" disabled>Success</z-link>
    <z-link type="warning" disabled>Warning</z-link>
    <z-link type="danger" disabled>Danger</z-link>
    <z-link type="info" disabled>Info</z-link>
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
