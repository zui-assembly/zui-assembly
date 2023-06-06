<script setup lang="ts">
import { ref } from 'vue';

const checked = ref('custom-a');
const checked1 = ref(true);
</script>

<template>
  <div>{{ checked }}</div>
  <z-checkbox v-model="checked" true-label="custom-a" false-label="custom-b">Option1</z-checkbox>
  <div style="border-top: 1px solid rgb(60 60 60 / 12%)">{{ checked1 }}</div>
  <z-checkbox v-model="checked1">Option2</z-checkbox>
</template>
