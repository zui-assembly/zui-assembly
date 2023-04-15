<template>
  <z-icon color="red" size="25">
    <GitBranchOutline />
  </z-icon>
  <z-icon color="green" size="25">
    <TrashOutline />
  </z-icon>
  <z-icon color="blue" size="25">
    <AirplaneOutline />
  </z-icon>
</template>

<script lang="ts" setup>
import { AirplaneOutline, GitBranchOutline, TrashOutline } from '@vicons/ionicons5';
</script>

<style scoped lang="scss">
.demo-slot {
  i {
    margin-right: 10px;
  }
}
</style>
