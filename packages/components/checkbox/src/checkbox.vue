<template>
  <label
    :class="[
      cls.b(),
      cls.m(checkboxSize),
      cls.is('bordered', border ? true : false),
      cls.is('checked', isChecked || isCheckedGroup),
      cls.is('disabled', isDisabled)
    ]"
    @click="switchChecked"
  >
    <span
      :class="[
        cls.e('input'),
        cls.is('checked', isChecked || isCheckedGroup),
        cls.is('disabled', isDisabled),
        cls.is('indeterminate', indeterminate ? true : false)
      ]"
    >
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
  name: 'z-checkbox',
  inheritAttrs: false
});

const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);
const slots = useSlots() as { default?: () => { children: string }[] };

const cls = createNamespace('checkbox');

const injectGroup = inject<CheckboxGroupProvide>('CheckboxGroupProvide', {});
const injectIndeterminate = inject<() => { groupChecked: string[] | number[] }>('IndeterminateState', () => {
  return {
    groupChecked: []
  };
});

const _groupChecked = ref(injectGroup.groupChecked);

watch(
  () => injectIndeterminate(),
  (value) => {
    _groupChecked.value = value.groupChecked;
  },
  {
    deep: true
  }
);

/* Whether to select individually */
const isChecked = computed(() => {
  return props.modelValue ? true : false;
});

/* Selected status under Group */
const isCheckedGroup = computed(() => {
  return _groupChecked.value && (_groupChecked.value as string[] | number[]).includes(props.label as string & number)
    ? true
    : false;
});

/* Used to make the isDisabled judgment under max/min props */
const isLimitDisabled = computed(() => {
  if (_groupChecked.value) {
    const { max = 0, min = 0 } = injectGroup;
    return (
      (!!(max || min) && _groupChecked.value.length >= max && !isCheckedGroup.value) ||
      (_groupChecked.value.length <= min && isCheckedGroup.value)
    );
  } else {
    return false;
  }
});

/* Is it disabled state */
const isDisabled = computed(() => {
  return props.disabled || isLimitDisabled.value || !!injectGroup.disabled;
});

/* Multi Selection Box Size */
const checkboxSize = computed(() => {
  return props.border ? (injectGroup.size ? injectGroup.size : props.size ? props.size : 'default') : 'default';
});

// 切换选中状态
const switchChecked = (e: Event) => {
  if (isDisabled.value) return;
  e.preventDefault();
  // 如果是checkGroup，同步checkGroup的modelValue
  if (_groupChecked.value) {
    if (_groupChecked.value.includes(props.label as string & number)) {
      _groupChecked.value = (_groupChecked.value as string[] & number[]).filter(
        (item: string | number) => item !== props.label
      );
    } else {
      _groupChecked.value.push(props.label as string & number);
    }
  }

  // 触发checkGroup的 emit 事件
  if (injectGroup) {
    injectGroup?.changeGroupModel?.(_groupChecked.value as string[] | number[]);
  }
  emit('change', !props.modelValue);
  emit('update:modelValue', !props.modelValue);
};
</script>

<style lang="scss"></style>
