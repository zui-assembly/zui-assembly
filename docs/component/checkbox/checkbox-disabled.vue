<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
const checked1 = ref(true);
</script>

<template>
  <z-checkbox v-model="checked" disabled>选我😯</z-checkbox>
  <z-checkbox v-model="checked1" disabled>选其他😯</z-checkbox>
</template>
