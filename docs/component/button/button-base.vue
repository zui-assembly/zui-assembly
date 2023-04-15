<template>
  <div class="demo-row">
    <z-button type="default">默认按钮</z-button>
    <z-button type="primary">主要按钮</z-button>
    <z-button type="success">成功按钮</z-button>
    <z-button type="info">信息按钮</z-button>
    <z-button type="warning">警告按钮</z-button>
    <z-button type="danger">危险按钮</z-button>
  </div>

  <div class="demo-row">
    <z-button type="default" round>圆角按钮</z-button>
    <z-button type="primary" round>主要按钮</z-button>
    <z-button type="success" round>成功按钮</z-button>
    <z-button type="info" round>信息按钮</z-button>
    <z-button type="warning" round>警告按钮</z-button>
    <z-button type="danger" round>危险按钮</z-button>
  </div>

  <div class="demo-row">
    <z-button type="default" icon-placement="left" circle>
      <template #icon>
        <AirplaneOutline />
      </template>
    </z-button>
    <z-button type="primary" icon-placement="left" circle>
      <template #icon>
        <GitBranchOutline />
      </template>
    </z-button>
    <z-button type="success" icon-placement="left" circle>
      <template #icon>
        <TrashOutline />
      </template>
    </z-button>
    <z-button type="info" icon-placement="left" circle>
      <template #icon>
        <PersonOutline />
      </template>
    </z-button>
    <z-button type="warning" icon-placement="left" circle>
      <template #icon>
        <CloudUploadOutline />
      </template>
    </z-button>
    <z-button type="danger" icon-placement="left" circle>
      <template #icon>
        <LockClosedOutline />
      </template>
    </z-button>
  </div>
</template>

<script lang="ts" setup>
import {
  AirplaneOutline,
  CloudUploadOutline,
  GitBranchOutline,
  LockClosedOutline,
  PersonOutline,
  TrashOutline
} from '@vicons/ionicons5';
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
