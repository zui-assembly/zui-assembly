<template>
  <div class="demo-row">
    <z-button type="default" disabled>Default</z-button>
    <z-button type="primary" disabled>Main</z-button>
    <z-button type="success" disabled>Success</z-button>
    <z-button type="info" disabled>Info</z-button>
    <z-button type="warning" disabled>Warning</z-button>
    <z-button type="danger" disabled>Danger</z-button>
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
