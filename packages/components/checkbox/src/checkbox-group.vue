<template>
  <div :class="cls.b()" aria-label="checkbox-group" role="group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@zui-assembly/utils/create';
import { computed, provide, watch } from 'vue';
import { CheckboxGroupContext, checkGroupKey, checkboxGroupEmits, checkboxGroupProps } from './props';

defineOptions({
  name: 'z-checkbox-group',
  inheritAttrs: false
});

const cls = createNamespace('checkbox-group');

const props = defineProps(checkboxGroupProps);
const emit = defineEmits(checkboxGroupEmits);

watch(
  () => props.modelValue,
  (value) => {
    groupProvide.value = {
      ...props,
      groupChecked: value as string[] | number[],
      changeGroupModel
    };
  }
);

const changeGroupModel = (value: string[] | number[]) => {
  emit('change', [...value] as string[] | number[]);
  emit('update:modelValue', [...value] as string[] | number[]);
};

const groupProvide = computed({
  get() {
    return {
      ...props,
      groupChecked: props.modelValue as string[] | number[],
      changeGroupModel
    };
  },
  set(val) {
    return val;
  }
});

// provide注入modelValue给子组件使用，子组件通过inject拿到modelValue来跟label值匹配是否选中
provide<CheckboxGroupContext>(checkGroupKey, groupProvide.value);

provide('IndeterminateState', () => {
  return {
    groupChecked: props.modelValue as string[] | number[]
  };
});
</script>
