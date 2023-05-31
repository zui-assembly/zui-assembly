<script setup lang="ts">
import { Random } from 'mockjs';
import { DefineComponent, ref } from 'vue';
import IndefiniteItem from './indefinite-item.vue';

interface DataSourceItem {
  id: number;
  name: string;
  desc: string;
  index: number;
}

const totalCount = 10000;
const data: DataSourceItem[] = [];
let index = 0;

while (index++ < totalCount) {
  data.push({
    id: index,
    name: Random.name(),
    desc: Random.csentence(20, 120),
    index
  });
}

const items = ref(data);
</script>

<template>
  <z-virtual-scroll-list
    :data-sources="items"
    data-key="id"
    :keeps="30"
    :source-size="80"
    :data-component="(IndefiniteItem as DefineComponent<{}, {}, any>)"
  />
</template>

<style lang="scss"></style>
