<template>
  <div class="demo-radio">
    <z-radio v-model="radio" label="disabled">Option A🥳</z-radio>
    <z-radio v-model="radio" label="selected and disabled">Option B🥳</z-radio>
  </div>

  <div class="demo-radio">
    <z-radio-group v-model="radio1">
      <z-radio label="1" size="large">Option 1</z-radio>
      <z-radio label="2" size="large">Option 2</z-radio>
    </z-radio-group>
  </div>
  <div class="demo-radio">
    <z-radio-group v-model="radio2">
      <z-radio label="1">Option 1</z-radio>
      <z-radio label="2">Option 2</z-radio>
    </z-radio-group>
  </div>
  <div class="demo-radio">
    <z-radio-group v-model="radio3">
      <z-radio label="1" size="small">Option 1</z-radio>
      <z-radio label="2" size="small">Option 2</z-radio>
    </z-radio-group>
  </div>
  <div class="demo-radio">
    <z-radio-group v-model="radio3" disabled>
      <z-radio label="1" size="small">Option 1</z-radio>
      <z-radio label="2" size="small">Option 2</z-radio>
    </z-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio = ref('selected and disabled');

const radio1 = ref('1');
const radio2 = ref('2');
const radio3 = ref('1');
</script>

<style lang="scss" scoped>
.demo-radio {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
