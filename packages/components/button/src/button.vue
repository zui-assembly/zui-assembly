<template>
  <button
    :class="[
      cra.b(),
      cra.m(type),
      cra.m(size),
      cra.is('round', round),
      cra.is('circle', circle),
      cra.is('loading', loading),
      cra.is('disabled', disabled)
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="emitClick"
    @mousedown="emitMousedown"
  >
    <template v-if="loading">
      <z-icon>
        <LoadingComponent></LoadingComponent>
      </z-icon>
    </template>
    <template v-if="iconPlacement === 'left'">
      <z-icon>
        <template v-if="slots.icon">
          <Component :is="slots.icon"></Component>
        </template>
      </z-icon>
    </template>
    <slot></slot>
    <template v-if="iconPlacement === 'right'">
      <z-icon style="margin-left: 5px">
        <template v-if="slots.icon">
          <Component :is="slots.icon"></Component>
        </template>
      </z-icon>
    </template>
  </button>
</template>

<script lang="ts" setup>
import ZIcon from '@zui-assembly/components/icon';
import LoadingComponent from '@zui-assembly/components/internal-icon/Loading';
import { createNamespace } from '@zui-assembly/utils/create';
import { useSlots } from 'vue';
import { buttonEmits, buttonProps } from './button';

const cra = createNamespace('button'); // z-button
defineOptions({
  name: 'z-button',
  inheritAttrs: false
});
defineProps(buttonProps);
const emit = defineEmits(buttonEmits);
const slots = useSlots();

const emitClick = (e: MouseEvent) => {
  emit('click', e);
};
const emitMousedown = (e: MouseEvent) => {
  emit('mousedown', e);
};
</script>
