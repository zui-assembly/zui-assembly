<script setup lang="ts">
import { ref } from 'vue';

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ref(cityOptions);
</script>

<template>
  <z-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <z-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</z-checkbox>
  </z-checkbox-group>
</template>
