<script setup lang="ts">
import { ref } from 'vue';

// const cityOptions = ['上海', '北京', '广州', '深圳'];
const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

const checkboxGroup1 = ref(['Shanghai']);
const checkboxGroup2 = ref(['Shanghai']);
const checkboxGroup3 = ref(['Shanghai']);
const checkboxGroup4 = ref(['Shanghai']);
const cities = ref(cityOptions);
</script>

<template>
  <div>
    <div>
      <z-checkbox-button v-for="(city, index) in cities" :key="city" :label="city" :checked="index % 2 === 0">
        {{ city }}
      </z-checkbox-button>
    </div>
    <div style="margin-top: 24px">
      <z-checkbox-group v-model="checkboxGroup1" size="large">
        <z-checkbox-button v-for="city in cities" :key="city" :label="city">{{ city }}</z-checkbox-button>
      </z-checkbox-group>
    </div>
    <div style="margin-top: 24px">
      <z-checkbox-group v-model="checkboxGroup2">
        <z-checkbox-button v-for="city in cities" :key="city" :label="city">{{ city }}</z-checkbox-button>
      </z-checkbox-group>
    </div>
    <div style="margin-top: 24px">
      <z-checkbox-group v-model="checkboxGroup3" size="small">
        <z-checkbox-button v-for="city in cities" :key="city" :label="city" :disabled="city === 'Beijing'">
          {{ city }}
        </z-checkbox-button>
      </z-checkbox-group>
    </div>
    <div style="margin-top: 24px">
      <z-checkbox-group v-model="checkboxGroup4" size="small" disabled>
        <z-checkbox-button v-for="city in cities" :key="city" :label="city">{{ city }}</z-checkbox-button>
      </z-checkbox-group>
    </div>
  </div>
</template>
