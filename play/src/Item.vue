<!-- 自定义传入的列表渲染组件 -->
<template>
  <div class="item" style="height: 70px">
    <div class="header">
      <span class="header-index">{{ source.index }}</span>
      <span class="header-name">{{ source.name }}</span>
    </div>
    <div class="content">
      <span class="content-desc">{{ source.desc }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  source: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style lang="scss"></style>
