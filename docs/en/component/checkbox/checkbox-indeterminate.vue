<script setup lang="ts">
import { ref } from 'vue';

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

const isIndeterminate = ref(true);
const checkAll = ref(false);
const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ref(cityOptions);

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cityOptions : [];
  isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.value.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.value.length;
};
</script>

<template>
  <z-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">Select All</z-checkbox>
  <z-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <z-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</z-checkbox>
  </z-checkbox-group>
</template>

<style lang="scss"></style>
