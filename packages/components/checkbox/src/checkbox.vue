<template>
  <label
    :class="[
      cls.b(),
      cls.m(checkboxSize),
      cls.is('bordered', border ? true : false),
      cls.is('checked', isChecked || isCheckedGroup),
      cls.is('disabled', isDisabled)
    ]"
    @click="selectChecked"
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
import { useSlots } from 'vue';
import { checkboxEmits, checkboxProps } from './props';
import { useCheckbox } from './use-checkbox';

defineOptions({
  name: 'z-checkbox',
  inheritAttrs: false
});

const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);
const slots = useSlots() as { default?: () => { children: string }[] };

const cls = createNamespace('checkbox');

const { focus, isChecked, isCheckedGroup, isDisabled, checkboxSize, selectChecked } = useCheckbox(props, emit);
</script>

<style lang="scss"></style>
