<template>
  <a
    :class="[cra.b(), cra.m(type), cra.is('underline', disabled ? false : underline), cra.is('disabled', disabled)]"
    :href="href ? href : 'javascript:void(0)'"
  >
    <template v-if="iconPlacement === 'left'">
      <z-icon class="z-link--inner__left">
        <template v-if="slots.icon">
          <Component :is="slots.icon"></Component>
        </template>
      </z-icon>
    </template>
    <span class="z-link--inner">
      <slot></slot>
      <template v-if="iconPlacement === 'right'">
        <z-icon class="z-link--inner__right">
          <template v-if="slots.icon">
            <Component :is="slots.icon"></Component>
          </template>
        </z-icon>
      </template>
    </span>
  </a>
</template>

<script setup lang="ts">
import { createNamespace } from '@zui-assembly/utils/create';
import { useSlots } from 'vue';
import { linkProps } from './link';

defineOptions({
  name: 'z-link'
});

const cra = createNamespace('link');
const slots = useSlots();

defineProps(linkProps);
</script>
