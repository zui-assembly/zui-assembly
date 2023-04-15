<template>
  <div class="demo-row">
    <z-button type="default">Default</z-button>
    <z-button type="primary">Main</z-button>
    <z-button type="success">Success</z-button>
    <z-button type="info">Information</z-button>
    <z-button type="warning">Warning</z-button>
    <z-button type="danger">Danger</z-button>
  </div>

  <div class="demo-row">
    <z-button type="default" round>Rounded</z-button>
    <z-button type="primary" round>Main</z-button>
    <z-button type="success" round>Success</z-button>
    <z-button type="info" round>Information</z-button>
    <z-button type="warning" round>Warning</z-button>
    <z-button type="danger" round>Danger</z-button>
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
