<template>
  <div :class="bem.b()">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@zui-assembly/utils/create';

const bem = createNamespace('button-group'); // z-button-group
defineOptions({
  name: 'z-button-group',
  inheritAttrs: false
});
</script>
