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
import { useSlots } from 'vue';
import { checkboxButtonProps } from './props';
import { useCheckbox } from './use-checkbox';

defineOptions({
  name: 'z-checkbox-button',
  inheritAttrs: false
});

const props = defineProps(checkboxButtonProps);
const slots = useSlots() as { default?: () => { children: string }[] };

const cls = createNamespace('checkbox-button');

const {
  focus,
  isCheckedButton: isChecked,
  activeStyle,
  isDisabled,
  buttonSize,
  selectCheckboxButton
} = useCheckbox(props);
</script>
