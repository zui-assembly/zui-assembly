<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
const checked1 = ref(true);
</script>

<template>
  <z-checkbox v-model="checked" disabled>choose me😯</z-checkbox>
  <z-checkbox v-model="checked1" disabled>choose other😯</z-checkbox>
</template>

<style lang="scss">
@import '@zui-assembly/theme-style/src/common/var.scss';
</style>
