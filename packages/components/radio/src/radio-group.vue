<template>
  <div :id="radioId" ref="radioGroupRef" :class="cls.b()" role="radioGroup">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useId } from '@zui-assembly/hooks';
import { createNamespace } from '@zui-assembly/utils/create';
import { computed, nextTick, onMounted, provide, ref } from 'vue';
import {
  BaseType,
  RadioGroupContext,
  RadioGroupProps,
  radioGroupEmits,
  radioGroupKey,
  radioGroupProps,
  radioModelKey
} from './props';

defineOptions({
  name: 'z-radio-group',
  inheritAttrs: false
});

const props = defineProps(radioGroupProps);
const emit = defineEmits(radioGroupEmits);

const cls = createNamespace('radio-group');
const radioId = useId();
const radioGroupRef = ref<HTMLDivElement>();

/* 检查 radioGroup 下的所有 radio 是否有没有被选中的, 如果没有被选中则将第一个 radio 的 tabIndex 设置为0, 以便可以使用 tab 健去选择第一个radio */
onMounted(() => {
  const radios = radioGroupRef.value!.querySelectorAll<HTMLInputElement>('[type=radio]');
  const firstLabel = radios[0];

  if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
    firstLabel.tabIndex = 0;
  }
});

// watch(
//   () => props.modelValue,
//   (value) => {
//     groupProvide.value = {
//       ...props,
//       groupChecked: value as BaseType,
//       changeGroupModel
//     };
//   }
// );

const changeGroupModel = (value: RadioGroupProps['modelValue']) => {
  emit('update:modelValue', value);
  nextTick(() => emit('change', value));
};

const groupProvide = computed({
  get() {
    return {
      ...props,
      groupChecked: props.modelValue as BaseType,
      changeGroupModel
    };
  },
  set(val) {
    return val;
  }
});

provide<RadioGroupContext>(radioGroupKey, groupProvide.value as RadioGroupProps);

provide(radioModelKey, () => {
  return {
    groupChecked: props.modelValue as BaseType
  };
});
</script>
