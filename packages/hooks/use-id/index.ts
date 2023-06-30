import type { MaybeRef } from '@vueuse/core';
import { createNamespace } from '@zui-assembly/utils/create';
import { InjectionKey, Ref, computed, getCurrentInstance, inject, unref } from 'vue';

export type ElIdInjectionContext = {
  prefix: number;
  current: number;
};

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0
};

export const ID_INJECTION_KEY: InjectionKey<ElIdInjectionContext> = Symbol('elIdInjection');

export const useIdInjection = (): ElIdInjectionContext => {
  return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};

/* 暂时没考虑服务端 */
export const useId = (deterministicId?: MaybeRef<string>): Ref<string> => {
  const idInjection = useIdInjection();

  const namespace = createNamespace('');

  const idRef = computed(
    () => unref(deterministicId) || `${namespace.b()}id-${idInjection.prefix}-${idInjection.current++}`
  );

  return idRef;
};
