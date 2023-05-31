<template>
  <div class="calendar-demo">
    <z-calendar v-model="currentDate"></z-calendar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentDate = ref(new Date());
</script>

<style lang="scss">
@import '@zui-assembly/theme-style/src/common/var.scss';
.calendar-demo {
  thead {
    tr {
      border-top: 0;
      th {
        border: unset;
        background-color: $color-white;
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 0;
      }
    }
  }
}
</style>
