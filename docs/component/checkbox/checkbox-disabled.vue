<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
const checked1 = ref(true);
</script>

<template>
  <z-checkbox v-model="checked" disabled>禁用😯</z-checkbox>
  <z-checkbox v-model="checked1">非禁用😯</z-checkbox>
</template>
