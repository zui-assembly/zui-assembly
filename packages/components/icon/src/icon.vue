<template>
  <i :class="cra.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { createNamespace } from '@zui-assembly/utils/create';
import { computed, CSSProperties } from 'vue';
import { iconProps, IconProps } from './icon';
defineOptions({
  name: 'z-icon'
});

const cra = createNamespace('icon');

const props: IconProps = defineProps(iconProps);

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {};
  return {
    ...(props.color ? { color: props.color } : {}),
    ...(props.size ? { fontSize: props.size + 'px' } : {})
  };
});
</script>

<style lang="scss" scoped></style>
