<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(true);
</script>

<template>
  <z-checkbox v-model="checked">选我😯</z-checkbox>
</template>
