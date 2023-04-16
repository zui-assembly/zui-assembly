<script setup lang="ts">
import { computed, ref } from 'vue';
import codeSvg from './Icons/code.vue';
import copySvg from './Icons/copy.vue';
import SfcPlayground from './SfcPlayground.vue';
import Tooltip from './Tooltip/index.vue';
import { useCopyCode } from './useCopyCode';

const props = withDefaults(
  defineProps<{
    /**
     * @zh 源码字符串(需经过encodeURIComponent处理)
     */
    code: string;
    highlightedCode: string;
    title?: string;
    desc?: string;
    lang?: string;
    defaultExpand?: boolean;
    importMap?: Record<string, string>;
  }>(),
  {
    lang: 'vue',
    defaultExpand: false,
    importMap: () => ({})
  }
);

const decodedCode = computed(() => decodeURIComponent(props.code));

const { showTip, copyCode } = useCopyCode(decodedCode.value);

const decodedHighlightedCode = computed(() => decodeURIComponent(props.highlightedCode));

const expand = ref(props.defaultExpand);
const toggleExpand = () => (expand.value = !expand.value);
</script>

<template>
  <ClientOnly>
    <article v-bind="$attrs" class="vitepress-demo">
      <div class="demo-slot vp-raw">
        <slot></slot>
      </div>

      <div v-show="title || desc" class="demo-title-desc">
        <span class="demo-title">{{ title }}</span>
        <span class="demo-desc">{{ desc }}</span>
      </div>

      <div class="demo-actions">
        <div class="demo-platforms">
          <!-- <div class="demo-tootips" data-sfc="Vue SFC Playground">
            <SfcPlayground :content="decodedCode" :import-map="importMap" />
          </div> -->
          <Tooltip content="Vue SFC Playground" placement="top-start">
            <SfcPlayground :content="decodedCode" :import-map="importMap" />
          </Tooltip>
        </div>
        <div class="demo-buttons">
          <div class="demo-actions-copy">
            <span v-show="showTip" class="demo-actions-tip">复制成功!</span>
            <Tooltip content="复制代码" placement="top-end">
              <copySvg v-show="!showTip" title="复制" @click="copyCode" />
            </Tooltip>
          </div>
          <Tooltip content="查看代码" placement="top-end">
            <codeSvg class="demo-actions-expand" title="展开" @click="toggleExpand()" />
          </Tooltip>
        </div>
      </div>
      <div v-show="expand" :class="`language-${lang} extra-class`" v-html="decodedHighlightedCode"></div>
    </article>
  </ClientOnly>
</template>

<style src="./demo.less"></style>
