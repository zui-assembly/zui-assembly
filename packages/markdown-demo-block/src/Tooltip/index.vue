<template>
  <div ref="tooltipRef" class="tooltip__poper">
    <slot></slot>
    <div :class="['tooltip__poper-arrow', placement ? `tooltip__poper-arrow-${placement}` : '']"></div>
    <div :class="['tooltip__poper-content', placement ? `tooltip__poper-content-${placement}` : '']">{{ content }}</div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { tooltip } from './type';
const props = defineProps(tooltip);

const tooltipRef = ref<HTMLElement | null>(null);

const placement = computed(() => {
  return props.placement;
});

// 根据tooltipRef的位置，计算出content的位置和arrow的位置
const computePosition = () => {
  const tooltipEl = tooltipRef.value;
  if (!tooltipEl) return;
  const contentEl = tooltipEl.querySelector('.tooltip__poper-content') as HTMLElement;
  const arrowEl = tooltipEl.querySelector('.tooltip__poper-arrow') as HTMLElement;
  const { width: tooltipWidth, height: tooltipHeight } = tooltipEl.getBoundingClientRect();
  const { width: contentWidth, height: contentHeight } = contentEl.getBoundingClientRect();
  const { width: arrowWidth, height: arrowHeight } = arrowEl.getBoundingClientRect();
  const marginLeft = parseInt(window.getComputedStyle(tooltipEl.children[0]).marginLeft);
  const { placement } = props;
  switch (placement) {
    case 'top':
      contentEl.style.top = `${arrowHeight + 7}px`;
      contentEl.style.left = `${(tooltipWidth - contentWidth) / 2}px`;
      arrowEl.style.top = `${-arrowHeight}px`;
      arrowEl.style.left = `${(tooltipWidth - arrowWidth) / 2}px`;
      break;
    case 'top-start':
      contentEl.style.top = `${arrowHeight - 40}px`;
      contentEl.style.left = `${0}px`;
      arrowEl.style.top = `${arrowHeight - 14}px`;
      arrowEl.style.left = `${(tooltipWidth - arrowWidth) / 2}px`;
      break;
    case 'top-end':
      contentEl.style.top = `${arrowHeight - 40}px`;
      contentEl.style.left = `${tooltipWidth - contentWidth + 1}px`;
      arrowEl.style.top = `${arrowHeight - 14}px`;
      arrowEl.style.left = `${marginLeft ? tooltipWidth - marginLeft + 3 : (tooltipWidth - arrowWidth) / 2}px`;
      break;
    case 'bottom':
      contentEl.style.top = `${arrowHeight + 7}px`;
      contentEl.style.left = `${(tooltipWidth - contentWidth) / 2}px`;
      arrowEl.style.top = `${-arrowHeight}px`;
      arrowEl.style.left = `${(tooltipWidth - arrowWidth) / 2}px`;
      break;
    case 'bottom-start':
      contentEl.style.top = `${arrowHeight + 7}px`;
      contentEl.style.left = `${0}px`;
      arrowEl.style.top = `${arrowHeight - 5}px`;
      arrowEl.style.left = `${(tooltipWidth - arrowWidth) / 2}px`;
      break;
    case 'bottom-end':
      contentEl.style.top = `${arrowHeight + 7}px`;
      contentEl.style.left = `${tooltipWidth - contentWidth}px`;
      arrowEl.style.top = `${arrowHeight - 5}px`;
      arrowEl.style.left = `${marginLeft ? tooltipWidth - marginLeft : (tooltipWidth - arrowWidth) / 2}px`;
      break;
    default:
      break;
  }
};

onMounted(() => {
  computePosition();
});
</script>

<style src="./index.less"></style>
