<script setup lang="ts">
import { ref } from 'vue';

const radio1 = ref('New York');
const radio2 = ref('New York');
const radio3 = ref('New York');
</script>

<template>
  <div>
    <z-radio-group v-model="radio1" size="large">
      <z-radio-button label="New York" />
      <z-radio-button label="Washington" />
      <z-radio-button label="Los Angeles" />
      <z-radio-button label="Chicago" />
    </z-radio-group>
  </div>
  <div style="margin-top: 20px">
    <z-radio-group v-model="radio2">
      <z-radio-button label="New York" />
      <z-radio-button label="Washington" />
      <z-radio-button label="Los Angeles" />
      <z-radio-button label="Chicago" />
    </z-radio-group>
  </div>
  <div style="margin-top: 20px">
    <z-radio-group v-model="radio3" size="small">
      <z-radio-button label="New York" />
      <z-radio-button label="Washington" disabled />
      <z-radio-button label="Los Angeles" />
      <z-radio-button label="Chicago" />
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
