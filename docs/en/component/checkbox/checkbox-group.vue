<script setup lang="ts">
import { ref } from 'vue';

const checkList = ref(['Checkbox', 'Selected & disabled😯']);
</script>

<template>
  <z-checkbox-group v-model="checkList">
    <z-checkbox label="Checkbox"></z-checkbox>
    <z-checkbox label="Checkbox B😯"></z-checkbox>
    <z-checkbox label="Checkbox C😯"></z-checkbox>
    <z-checkbox label="Disabled😯" disabled></z-checkbox>
    <z-checkbox label="Selected & disabled😯" disabled></z-checkbox>
  </z-checkbox-group>
</template>
