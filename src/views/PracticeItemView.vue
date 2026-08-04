<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { practiceList } from '@/data/practices'

const route = useRoute()

// 주소의 /practices/3 에서 3번째 항목을 꺼낸다
const index = computed(() => Number(route.params.index))
const item = computed(() => practiceList[index.value])
</script>

<template>
  <div v-if="item" class="practice">
    <h2 class="practice__title">{{ index + 1 }}. {{ item.label }}</h2>
    <p class="practice__group">{{ item.group }}</p>

    <!-- 목록에서 고른 컴포넌트를 이 자리에 끼워 넣는다 -->
    <component :is="item.comp" :key="index" />
  </div>

  <p v-else class="practice__empty">해당하는 실습을 찾지 못했습니다.</p>
</template>

<style scoped>
.practice__title {
  margin: 0;
}

.practice__group {
  margin: 4px 0 20px;
  color: #888;
  font-size: 13px;
}

.practice__empty {
  color: #888;
}
</style>
