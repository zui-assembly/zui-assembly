<script setup lang="ts">
import {
  AirplaneOutline,
  ChevronBack,
  ChevronForward,
  CloudUploadOutline,
  GitBranchOutline,
  PersonOutline,
  TrashOutline
} from '@vicons/ionicons5';
</script>

<template>
  <z-button type="primary" loading><span>加载中</span></z-button>
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
  <hr />
  <z-button-group>
    <z-button type="primary" icon-placement="left">
      <template #icon>
        <ChevronBack />
      </template>
      上一页
    </z-button>
    <z-button type="primary" icon-placement="right">
      <template #icon>
        <CloudUploadOutline />
      </template>
      中间
    </z-button>
    <z-button type="primary" icon-placement="right">
      <template #icon>
        <ChevronForward />
      </template>
      下一页
    </z-button>
  </z-button-group>
</template>
