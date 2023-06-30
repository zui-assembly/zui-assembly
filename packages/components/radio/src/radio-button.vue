<template>
  <label
    :class="[
      cls.b(),
      cls.m(buttonSize),
      cls.is('checked', modelValue === label),
      cls.is('disabled', disabled),
      cls.is('focus', focus)
    ]"
    role="radio"
    :aria-checked="modelValue === label"
    :aria-disabled="disabled"
    @click="selectRadioButton"
  >
    <input
      ref="radioRef"
      :class="cls.e('original')"
      type="radio"
      :name="name"
      :disabled="disabled"
      :value="label"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span :class="cls.e('label')" :style="modelValue === label && !disabled ? activeStyle : undefined">
      {{ label ? label : slots.default?.()[0].children }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { createNamespace } from '@zui-assembly/utils/create';
import { useSlots } from 'vue';
import { radioButtonProps } from './props';
import { useRadio } from './use-radio';

defineOptions({
  name: 'z-radio-button',
  inheritAttrs: false
});

const props = defineProps(radioButtonProps);
const slots = useSlots() as { default?: () => { children: string }[] };

const cls = createNamespace('radio-button');

const { focus, radioRef, modelValue, activeStyle, disabled, buttonSize, selectRadioButton } = useRadio(props);
</script>
