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
      <input
        v-if="trueLabel || falseLabel"
        :class="cls.e('original')"
        type="checkbox"
        :aria-hidden="indeterminate ? true : false"
        :name="name"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        @focus="focus = true"
        @blur="focus = false"
      />
      <input
        v-else
        :class="cls.e('original')"
        type="checkbox"
        :name="name"
        :aria-hidden="indeterminate ? true : false"
        :disabled="isDisabled"
        :value="label"
        @focus="focus = true"
        @blur="focus = false"
      />
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
const focus = ref(false);

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
  if ({}.toString.call(props.modelValue) === '[object Boolean]') {
    return props.modelValue;
  } else if (Array.isArray(props.modelValue)) {
    return (props.modelValue as string[] | number[]).includes(props.label as string & number);
  } else if (props.modelValue !== null && props.modelValue !== undefined) {
    return props.modelValue === props.trueLabel;
  } else {
    return false;
  }
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

  let value;
  // 区分是否有trueLabel和falseLabel
  if (props.trueLabel !== undefined && props.falseLabel !== undefined) {
    value = isChecked.value ? props.falseLabel : props.trueLabel;
  } else {
    value = !isChecked.value;
  }

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

  /* 触发checkGroup的 emit 事件, 更新 checkGroup 的 v-model 绑定值 */
  if (injectGroup) {
    injectGroup?.changeGroupModel?.(_groupChecked.value as string[] | number[]);
  }

  /* 触发checkbox的 emit 事件, 更新 checkbox 的 v-model 绑定值 */
  emit('change', value);
  emit('update:modelValue', value);
};
</script>

<style lang="scss"></style>
