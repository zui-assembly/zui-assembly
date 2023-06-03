<template>
  <div :class="cls.b()" aria-label="checkbox-group" role="group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@zui-assembly/utils/create';
import { provide, ref } from 'vue';
import { CheckboxGroupProvide, checkboxGroupEmits, checkboxGroupProps } from './props';

defineOptions({
  name: 'z-checkbox-group'
  // inheritAttrs: false
});

const props = defineProps(checkboxGroupProps);
const emit = defineEmits(checkboxGroupEmits);

const changeGroupModel = (value: string[] | number[]) => {
  emit('update:modelValue', [...value] as string[] | number[]);
};

const groupProvide = ref({
  ...props,
  changeGroupModel
});

// provide注入modelValue给子组件使用，子组件通过inject拿到modelValue来跟label值匹配是否选中
provide<CheckboxGroupProvide>('CheckboxGroupProvide', groupProvide.value);

const cls = createNamespace('checkbox-group');
</script>
