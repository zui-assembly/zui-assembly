<template>
  <div class="demo-row">
    <z-button type="primary" icon-placement="left">
      <template #icon>
        <AirplaneOutline />
      </template>
    </z-button>
    <z-button type="primary" icon-placement="left">
      <template #icon>
        <GitBranchOutline />
      </template>
    </z-button>
    <z-button type="primary" icon-placement="left">
      <template #icon>
        <TrashOutline />
      </template>
    </z-button>
    <z-button type="primary" icon-placement="left">
      <template #icon>
        <PersonOutline />
      </template>
      <span>用户</span>
    </z-button>

    <z-button type="primary" icon-placement="right">
      <template #icon>
        <CloudUploadOutline />
      </template>
      上传
    </z-button>
  </div>
</template>

<script lang="ts" setup>
import { AirplaneOutline, CloudUploadOutline, GitBranchOutline, PersonOutline, TrashOutline } from '@vicons/ionicons5';
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
