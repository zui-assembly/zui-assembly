<script setup lang="ts">
import { ref } from 'vue';

const cityOptions = ['上海', '北京', '广州', '深圳'];

const checkedCities = ref(['上海', '北京']);
const cities = ref(cityOptions);
</script>

<template>
  <z-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <z-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</z-checkbox>
  </z-checkbox-group>
</template>
