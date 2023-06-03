<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(true);
</script>

<template>
  <z-checkbox v-model="checked">Choose me😯</z-checkbox>
</template>

<style lang="scss"></style>
