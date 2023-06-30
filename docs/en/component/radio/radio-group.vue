<template>
  <div class="demo-radio">
    <z-radio-group v-model="radio">
      <z-radio :label="3">Option A</z-radio>
      <z-radio :label="6">Option B</z-radio>
      <z-radio :label="9">Option C</z-radio>
    </z-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio = ref(3);
</script>

<style lang="scss" scoped>
.demo-radio {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  .ml {
    margin-left: 1rem;
  }
}
</style>
