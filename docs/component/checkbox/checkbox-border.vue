<script setup lang="ts">
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(true);
const checkboxGroup1 = ref([]);
const checkboxGroup2 = ref([]);
</script>

<template>
  <div>
    <z-checkbox v-model="checked1" label="Option1" border size="large"></z-checkbox>
    <z-checkbox v-model="checked2" label="Option2" border size="large"></z-checkbox>
  </div>
  <div style="margin-top: 20px">
    <z-checkbox v-model="checked3" label="Option1" border></z-checkbox>
    <z-checkbox v-model="checked4" label="Option2" border></z-checkbox>
  </div>
  <div style="margin-top: 20px">
    <z-checkbox-group v-model="checkboxGroup1" size="small">
      <z-checkbox label="Option1" border></z-checkbox>
      <z-checkbox label="Option2" border disabled></z-checkbox>
    </z-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <z-checkbox-group v-model="checkboxGroup2" size="small" disabled>
      <z-checkbox label="Option1" border></z-checkbox>
      <z-checkbox label="Option2" border></z-checkbox>
    </z-checkbox-group>
  </div>
</template>

<style lang="scss">
@import '@zui-assembly/theme-style/src/common/var.scss';
</style>
