<template>
  <label
    :class="[
      cls.b(),
      cls.m(radioSize),
      cls.is('bordered', border ? true : false),
      cls.is('checked', modelValue === label),
      cls.is('disabled', disabled)
    ]"
  >
    <span :class="[cls.e('input'), cls.is('checked', modelValue === label), cls.is('disabled', disabled)]">
      <span :class="cls.e('inner')"></span>
      <input
        ref="radioRef"
        v-model="modelValue"
        :class="cls.e('original')"
        :value="label"
        :disabled="disabled"
        type="radio"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
    </span>
    <span :class="[cls.e('label')]">
      {{ _slotsLabel ? _slotsLabel : label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { createNamespace } from '@zui-assembly/utils/create';
import { nextTick, useSlots } from 'vue';
import { BaseType, radioEmits, radioProps } from './props';
import { useRadio } from './use-radio';

defineOptions({
  name: 'z-radio',
  inheritAttrs: false
});

const props = defineProps(radioProps);
const emit = defineEmits(radioEmits);
const slots = useSlots() as { default?: () => { children: string }[] };
const _slotsLabel = slots.default?.()[0].children || '';

const cls = createNamespace('radio');

const { focus, disabled, radioRef, modelValue, radioSize } = useRadio(props, emit);

const handleChange = () => {
  nextTick(() => emit('change', modelValue.value as BaseType));
};
</script>
