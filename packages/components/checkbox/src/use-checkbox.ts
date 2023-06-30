import { SetupContext, computed, inject, ref, watch } from 'vue';
import { CheckboxComponentProps, CheckboxEmits, CheckboxGroupContext, checkGroupKey } from './props';

export const useCheckbox = (props: CheckboxComponentProps, emit?: SetupContext<CheckboxEmits>['emit']) => {
  const focus = ref(false);

  const CheckGroup = inject<CheckboxGroupContext>(checkGroupKey, {});
  const injectIndeterminate = inject<() => { groupChecked: string[] | number[] }>('IndeterminateState', () => {
    return {
      groupChecked: []
    };
  });

  const _groupChecked = ref(CheckGroup.groupChecked);

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
      backgroundColor: CheckGroup.fill || '',
      borderColor: CheckGroup.fill || '',
      color: CheckGroup.textColor || '',
      boxShadow: '-1px 0 0 0 ' + CheckGroup.fill
    };
  });

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

  /* Whether to select individually button */
  const isCheckedButton = computed(() => {
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
    return props.disabled || isLimitDisabled.value || !!CheckGroup.disabled;
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
      const { max = 0, min = 0 } = CheckGroup;
      return (
        (!!(max || min) && _groupChecked.value.length >= max && !isCheckedGroup.value) ||
        (_groupChecked.value.length <= min && isCheckedGroup.value)
      );
    } else {
      return false;
    }
  });

  /* Multi Selection Box Size */
  const checkboxSize = computed(() => {
    return props.border ? (CheckGroup.size ? CheckGroup.size : props.size ? props.size : 'default') : 'default';
  });

  /* Multi Selection Button Size */
  const buttonSize = computed(() => {
    return CheckGroup.size ? CheckGroup.size : 'default';
  });

  /* Select the checkbox */
  const selectChecked = (e: Event) => {
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
    if (CheckGroup) {
      CheckGroup?.changeGroupModel?.(_groupChecked.value as string[] | number[]);
    }

    /* 触发checkbox的 emit 事件, 更新 checkbox 的 v-model 绑定值 */
    emit?.('change', value);
    emit?.('update:modelValue', value);
  };

  /* Select the checkbox button */
  const selectCheckboxButton = (e: Event) => {
    if (isDisabled.value || !!props.checked) return;

    e.preventDefault();

    if (isCheckedButton.value) {
      _groupChecked.value = (_groupChecked.value as string[] & number[]).filter((item: string | number) => {
        return props.trueLabel !== undefined ? item !== props.trueLabel : item !== props.label;
      });
    } else {
      _groupChecked.value?.push(
        props.trueLabel !== undefined ? (props.trueLabel as string & number) : (props.label as string & number)
      );
    }

    /* 触发checkGroup的 emit 事件, 更新 checkGroup 的 v-model 绑定值 */
    if (CheckGroup) {
      CheckGroup?.changeGroupModel?.(_groupChecked.value as string[] | number[]);
    }
  };

  return {
    focus,
    activeStyle,
    isChecked,
    isCheckedButton,
    isCheckedGroup,
    isDisabled,
    checkboxSize,
    buttonSize,
    selectChecked,
    selectCheckboxButton
  };
};
