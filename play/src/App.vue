<script setup lang="ts">
import { ref } from 'vue';

const currentDate = ref(new Date());
</script>

<template>
  {{ currentDate }}
  <z-calendar v-model="currentDate">
    <template #date-cell="{ data }">
      {{ data.isSelect ? `${data.day} ✅` : data.day }}
    </template>
  </z-calendar>
</template>
