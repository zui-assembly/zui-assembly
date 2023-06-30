<template>
  <div class="demo-radio">
    <z-radio v-model="radio" label="disabled" disabled>Option A🥳</z-radio>
    <z-radio v-model="radio" label="selected and disabled" disabled>Option B🥳</z-radio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio = ref('selected and disabled');
</script>

<style lang="scss" scoped>
.demo-radio {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
