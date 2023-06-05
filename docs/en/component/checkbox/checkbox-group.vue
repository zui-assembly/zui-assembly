<script setup lang="ts">
import { ref } from 'vue';

const checkList = ref(['Checkbox A😯', 'Selected & disabled😯']);
</script>

<template>
  <div style="display: flex; gap: 10px">
    <div v-for="(item, index) in checkList" :key="index">
      {{ item }}
    </div>
  </div>
  <div style="margin: 5px 0; border-bottom: 1px solid rgb(60 60 60 / 12%)"></div>
  <z-checkbox-group v-model="checkList">
    <z-checkbox label="Checkbox A😯"></z-checkbox>
    <z-checkbox label="Checkbox B😯"></z-checkbox>
    <z-checkbox label="Checkbox C😯"></z-checkbox>
    <z-checkbox label="Disabled😯" disabled></z-checkbox>
    <z-checkbox label="Selected & disabled😯" disabled></z-checkbox>
  </z-checkbox-group>
</template>
