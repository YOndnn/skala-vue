<script setup>
import { practiceList } from '@/data/practices'
</script>

<template>
  <div class="page">
    <h1>전체 목록 (한 페이지)</h1>

    <section v-for="(item, i) in practiceList" :key="item.label" class="item">
      <h2>{{ i + 1 }}. {{ item.label }}</h2>
      <p class="group">{{ item.group }}</p>
      <component :is="item.comp" />
    </section>
  </div>
</template>

<style scoped>
.page {
  max-width: 900px;
}
.item {
  padding: 20px 0 30px;
  border-bottom: 1px solid #eee;
}
.item h2 {
  margin: 0;
}
.group {
  margin: 4px 0 16px;
  color: #888;
  font-size: 13px;
}
</style>
