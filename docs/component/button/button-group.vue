<template>
  <div class="demo-row">
    <z-button-group>
      <z-button type="primary" icon-placement="left">
        <template #icon>
          <ChevronBack />
        </template>
        上一页
      </z-button>
      <z-button type="primary" icon-placement="right">
        <template #icon>
          <ChevronForward />
        </template>
        下一页
      </z-button>
    </z-button-group>

    <z-button-group>
      <z-button type="primary" icon-placement="left">
        <template #icon>
          <FileTrayFullOutline />
        </template>
      </z-button>
      <z-button type="primary" icon-placement="right">
        <template #icon>
          <GitBranchOutline />
        </template>
      </z-button>
      <z-button type="primary" icon-placement="right">
        <template #icon>
          <TrashOutline />
        </template>
      </z-button>
    </z-button-group>
  </div>
</template>

<script lang="ts" setup>
import { ChevronBack, ChevronForward, FileTrayFullOutline, GitBranchOutline, TrashOutline } from '@vicons/ionicons5';
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
