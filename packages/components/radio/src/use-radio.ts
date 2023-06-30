import { SetupContext, computed, inject, ref, watch } from 'vue';
import {
  BaseType,
  RadioComponentProps,
  RadioEmits,
  RadioGroupContext,
  RadioProps,
  radioGroupKey,
  radioModelKey
} from './props';

export const useRadio = (props: RadioComponentProps, emit?: SetupContext<RadioEmits>['emit']) => {
  const radioRef = ref<HTMLInputElement>();
  const radioGroup = inject<Omit<RadioGroupContext, 'modelValue'> & { modelValue: BaseType }>(radioGroupKey, {
    modelValue: ''
  });
  const injectIndeterminate = inject<() => { groupChecked: BaseType }>(radioModelKey, () => {
    return {
      groupChecked: ''
    };
  });

  const radioGroupValue = ref<BaseType>(radioGroup.modelValue);

  watch(
    () => injectIndeterminate(),
    (value) => {
      radioGroupValue.value = value.groupChecked;
    },
    {
      deep: true
    }
  );

  const isGroup = computed(() => {
    return radioGroup.groupChecked !== undefined;
  });

  const id = ref(radioGroup.id || '');
  const name = ref(radioGroup.name || '');
  const label = ref(radioGroup.label || '');
  const focus = ref(false);

  const modelValue = computed<RadioProps['modelValue']>({
    // 是否是 radioGroup 包裹
    get() {
      return isGroup.value ? radioGroupValue.value : props.modelValue;
    },
    // 如果是 radioGroup 包裹，就调用 radioGroup 的 changeGroupModel 方法触发 change 事件和更新 modelValue
    set(value) {
      console.log('🚀 ~ set ~ value:', value);

      if (isGroup.value) {
        radioGroup.changeGroupModel?.(value as BaseType);
      } else {
        emit?.('update:modelValue', value as BaseType);
      }
      radioRef.value!.checked = props.modelValue === props.label;
    }
  });

  /* Active style */
  const activeStyle = computed(() => {
    return {
      backgroundColor: radioGroup.fill || '',
      borderColor: radioGroup.fill || '',
      color: radioGroup.textColor || '',
      boxShadow: '-1px 0 0 0 ' + radioGroup.fill
    };
  });

  /* Disabled Radio Status */
  const disabled = computed(() => {
    return radioGroup.disabled ? radioGroup.disabled : props.disabled;
  });

  /* Multi Selection Button Size */
  const buttonSize = computed(() => {
    return radioGroup.size ? radioGroup.size : 'default';
  });

  const radioSize = computed(() => {
    return props.border ? (radioGroup.size ? radioGroup.size : props.size ? props.size : 'default') : 'default';
  });

  const selectRadioButton = (e: Event) => {
    if (disabled.value || !!props.checked) return;
    e.preventDefault();

    modelValue.value = props.label as BaseType;
  };

  return {
    id,
    name,
    label,
    focus,
    disabled,
    buttonSize,
    radioSize,
    radioRef,
    activeStyle,
    modelValue,
    selectRadioButton
  };
};
