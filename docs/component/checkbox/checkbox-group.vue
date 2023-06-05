<script setup lang="ts">
import { ref } from 'vue';

const checkList = ref(['复选框 A😯', '选中且禁用😯']);
</script>

<template>
  <div style="display: flex; gap: 10px">
    <div v-for="(item, index) in checkList" :key="index">
      {{ item }}
    </div>
  </div>
  <div style="margin: 5px 0; border-bottom: 1px solid rgb(60 60 60 / 12%)"></div>
  <z-checkbox-group v-model="checkList">
    <z-checkbox label="复选框 A😯"></z-checkbox>
    <z-checkbox label="复选框 B😯"></z-checkbox>
    <z-checkbox label="复选框 C😯"></z-checkbox>
    <z-checkbox label="禁用😯" disabled></z-checkbox>
    <z-checkbox label="选中且禁用😯" disabled></z-checkbox>
  </z-checkbox-group>
</template>
