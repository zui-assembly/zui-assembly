<template>
  <label
    :class="[cls.b(), cls.is('checked', modelValue ? true : false), cls.is('disabled', disabled ? true : false)]"
    @click="switchChecked"
  >
    <span :class="[cls.e('input'), cls.is('checked', isChecked), cls.is('disabled', disabled ? true : false)]">
      <span :class="cls.e('inner')"></span>
      <input type="checkbox" aria-hidden="false" :class="cls.e('original')" value />
    </span>
    <span :class="cls.e('label')">
      {{ label ? label : slots.default?.()[0].children }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { createNamespace } from '@zui-assembly/utils/create';
import { computed, defineEmits, inject, ref, useSlots, watch } from 'vue';
import { CheckboxGroupProvide, checkboxEmits, checkboxProps } from './props';

defineOptions({
  name: 'z-checkbox'
  // inheritAttrs: false,
});

const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);
const slots = useSlots() as { default?: () => { children: string }[] };

const cls = createNamespace('checkbox');
const injectGroup = inject<CheckboxGroupProvide>('CheckboxGroupProvide');
const groupChecked = ref();

const isChecked = computed(() => {
  return props.modelValue
    ? true
    : groupChecked.value
    ? groupChecked.value.includes(props.label as string | number)
      ? true
      : false
    : false;
});

watch(
  () => injectGroup,
  (val) => {
    if (val?.modelValue && val?.modelValue.length > 0) {
      groupChecked.value = val.modelValue as string[] | number[];
    }
  },
  {
    immediate: true,
    deep: true
  }
);

// 切换选中状态
const switchChecked = (e: Event) => {
  e.preventDefault();
  if (groupChecked.value) {
    if (groupChecked.value.includes(props.label)) {
      groupChecked.value = groupChecked.value.filter((item: string | number) => item !== props.label);
    } else {
      groupChecked.value = [...groupChecked.value, props.label];
    }
  }
  if (injectGroup) {
    injectGroup?.changeGroupModel(groupChecked.value);
  }
  emit('update:modelValue', !props.modelValue);
};
</script>

<style lang="scss"></style>
