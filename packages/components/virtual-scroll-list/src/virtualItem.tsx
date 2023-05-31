import { defineComponent, onMounted, onUpdated, ref, toRefs } from 'vue';
import { virtualItemProps } from './props';

export default defineComponent({
  name: 'VirtualItem',

  props: virtualItemProps,
  emits: ['itemResize'],

  setup(props, { emit }) {
    const { component: ZComponent, source, uniqueKey } = toRefs(props);
    const root = ref<HTMLDivElement | null>(null);

    function dispatchEvent() {
      emit('itemResize', uniqueKey.value, root.value?.offsetHeight);
    }

    onMounted(dispatchEvent);
    onUpdated(dispatchEvent);

    return () => {
      return (
        ZComponent.value && (
          <div key={uniqueKey.value} ref={root} data-key={uniqueKey.value}>
            <ZComponent.value source={source.value}></ZComponent.value>
          </div>
        )
      );
    };
  }
});
