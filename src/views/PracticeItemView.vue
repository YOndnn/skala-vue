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
    <el-card class="practice__card" shadow="never">
      <template #header>
        <h2 class="practice__title">{{ index + 1 }}. {{ item.label }}</h2>
        <p class="practice__group">{{ item.group }}</p>
      </template>

      <!-- 목록에서 고른 컴포넌트를 이 자리에 끼워 넣는다 -->
      <component :is="item.comp" :key="index" />
    </el-card>
  </div>

  <el-empty v-else description="해당하는 실습을 찾지 못했습니다." />
</template>

<style scoped>
/* 본문은 적당히 넓게만 쓰고 오른쪽은 비워 둔다 */
.practice__card {
  max-width: 900px;
}

.practice__title {
  margin: 0;
  font-size: 20px;
}

.practice__group {
  margin: 4px 0 0;
  color: #888;
  font-size: 13px;
}

/*
  실습 컴포넌트마다 글자·버튼 크기가 제각각이라 카드 안에서 비율이 안 맞았다.
  :deep() 로 카드 안쪽 기본 크기를 한 번에 맞춘다.
*/
.practice__card :deep(.practice-section),
.practice__card :deep(.box) {
  width: 100%;
  font-size: 14px;
}

.practice__card :deep(h2) {
  margin: 0 0 12px;
  font-size: 17px;
}

.practice__card :deep(h3) {
  margin: 16px 0 8px;
  font-size: 15px;
}

.practice__card :deep(p) {
  margin: 0 0 8px;
  line-height: 1.6;
}

/* Element Plus를 안 쓰는 옛 실습의 기본 버튼·입력창 모양 통일 */
.practice__card :deep(button:not([class*='el-'])) {
  min-height: 32px;
  margin: 0 6px 6px 0;
  padding: 0 14px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: white;
  font-family: inherit;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
}

.practice__card :deep(button:not([class*='el-']):hover) {
  border-color: #409eff;
  color: #409eff;
}

.practice__card :deep(input:not([class*='el-'])),
.practice__card :deep(select),
.practice__card :deep(textarea) {
  min-height: 32px;
  padding: 4px 11px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 14px;
  color: #606266;
}

.practice__card :deep(input[type='checkbox']),
.practice__card :deep(input[type='radio']) {
  min-height: 0;
  padding: 0;
}

.practice__card :deep(ul),
.practice__card :deep(ol) {
  margin: 0 0 8px;
  padding-left: 20px;
}

.practice__card :deep(li) {
  margin-bottom: 4px;
}
</style>
