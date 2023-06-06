<template>
  <label
    :class="[
      cls.b(),
      cls.m(buttonSize),
      cls.is('checked', isChecked),
      cls.is('disabled', isDisabled),
      cls.is('focus', focus)
    ]"
    role="checkbox"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
    @click="selectCheckboxButton"
  >
    <input
      v-if="trueLabel || falseLabel"
      :class="cls.e('original')"
      type="checkbox"
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
      :disabled="isDisabled"
      :value="label"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span :class="cls.e('label')" :style="isChecked && !isDisabled ? activeStyle : undefined">
      {{ label ? label : slots.default?.()[0].children }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { createNamespace } from '@zui-assembly/utils/create';
import { computed, inject, ref, useSlots, watch } from 'vue';
import { CheckboxGroupProvide, checkboxButtonProps } from './props';

defineOptions({
  name: 'z-checkbox-button',
  inheritAttrs: false
});

const props = defineProps(checkboxButtonProps);
const slots = useSlots() as { default?: () => { children: string }[] };

const cls = createNamespace('checkbox-button');

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

/* Active style */
const activeStyle = computed(() => {
  return {
    backgroundColor: injectGroup.fill || '',
    borderColor: injectGroup.fill || '',
    color: injectGroup.textColor || '',
    boxShadow: '-1px 0 0 0 ' + injectGroup.fill
  };
});

/* Whether to select individually */
const isChecked = computed(() => {
  if (Array.isArray(_groupChecked.value)) {
    return (_groupChecked.value as string[] | number[]).includes(props.label as string & number);
  } else if (_groupChecked.value !== null && _groupChecked.value !== undefined) {
    return _groupChecked.value === props.trueLabel;
  } else {
    return props.checked ? true : false;
  }
});

/* Is it disabled state */
const isDisabled = computed(() => {
  return props.disabled || isLimitDisabled.value || !!injectGroup.disabled;
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

/* Multi Selection Button Size */
const buttonSize = computed(() => {
  return injectGroup.size ? injectGroup.size : 'default';
});

/* Select the checkbox button */
const selectCheckboxButton = (e: Event) => {
  if (isDisabled.value || !!props.checked) return;

  e.preventDefault();

  if (isChecked.value) {
    _groupChecked.value = (_groupChecked.value as string[] & number[]).filter((item: string | number) => {
      return props.trueLabel !== undefined ? item !== props.trueLabel : item !== props.label;
    });
  } else {
    _groupChecked.value?.push(
      props.trueLabel !== undefined ? (props.trueLabel as string & number) : (props.label as string & number)
    );
  }

  /* 触发checkGroup的 emit 事件, 更新 checkGroup 的 v-model 绑定值 */
  if (injectGroup) {
    injectGroup?.changeGroupModel?.(_groupChecked.value as string[] | number[]);
  }
};
</script>
