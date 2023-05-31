<!-- 自定义传入的列表渲染组件 -->
<template>
  <div
    class="item"
    style="margin-bottom: 10px; padding: 5px 10px; height: 80px; color: #7dbcfc; background-color: #e8f3fe"
  >
    <div class="header">
      <div class="header-name">
        <span>昵称：</span>
        {{ source.name }} - {{ source.index }}
      </div>
    </div>
    <div class="content">
      <span class="content-desc">
        <sapn>描述：</sapn>
        {{ source.desc }}
      </span>
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

<style lang="scss">
.header-name,
.content-desc {
  font-size: 16px;
  font-weight: 500;
}
</style>
