<script setup lang="ts">
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
const radio4 = ref('1');
</script>

<template>
  <div>
    <z-radio-group v-model="radio1">
      <z-radio label="1" size="large" border>Option A</z-radio>
      <z-radio label="2" size="large" border>Option B</z-radio>
    </z-radio-group>
  </div>
  <div style="margin-top: 20px">
    <z-radio-group v-model="radio2">
      <z-radio label="1" border>Option A</z-radio>
      <z-radio label="2" border>Option B</z-radio>
    </z-radio-group>
  </div>
  <div style="margin-top: 20px">
    <z-radio-group v-model="radio3" size="small">
      <z-radio label="1" border>Option A</z-radio>
      <z-radio label="2" border disabled>Option B</z-radio>
    </z-radio-group>
  </div>
  <div style="margin-top: 20px">
    <z-radio-group v-model="radio4" size="small" disabled>
      <z-radio label="1" border>Option A</z-radio>
      <z-radio label="2" border>Option B</z-radio>
    </z-radio-group>
  </div>
</template>

<style lang="scss" scoped>
.demo-radio {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
