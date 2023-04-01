<script setup lang="ts">
import { ChatboxEllipsesOutline, EyeSharp } from '@vicons/ionicons5';
</script>

<template>
  <!-- <z-button type="primary" loading><span>加载中</span></z-button>
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
  </z-button-group> -->
  <h1>基础用法</h1>
  <z-link>默认链接</z-link>
  <z-link type="primary">主要链接</z-link>
  <z-link type="success">成功链接</z-link>
  <z-link type="warning">警告链接</z-link>
  <z-link type="danger">危险链接</z-link>
  <z-link type="info">信息链接</z-link>
  <br />
  <h1>禁用状态</h1>
  <z-link disabled>默认链接</z-link>
  <z-link type="primary" disabled>主要链接</z-link>
  <z-link type="success" disabled>成功链接</z-link>
  <z-link type="warning" disabled>警告链接</z-link>
  <z-link type="danger" disabled>危险链接</z-link>
  <z-link type="info" disabled>信息链接</z-link>
  <br />
  <h1>下划线</h1>
  <z-link :underline="false">无下划线</z-link>
  <z-link>有下划线</z-link>
  <br />
  <h1>图标</h1>
  <z-link icon-placement="left">
    <template #icon><ChatboxEllipsesOutline /></template>
    信息
  </z-link>
  <z-link icon-placement="right">
    <template #icon><EyeSharp /></template>
    查看
  </z-link>
</template>
