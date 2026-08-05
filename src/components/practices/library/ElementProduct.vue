<script setup>
import { ref, computed } from 'vue'

const productQuantity = ref(1) // 수량 카운터 기본값
const productRate = ref(4) // 별점 기본값 (별 4개)

const UNIT_PRICE = 12900
const totalPrice = computed(() => (UNIT_PRICE * productQuantity.value).toLocaleString('ko-KR'))
</script>

<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>🛒 실습2. 커머스 상품 수량 및 평점 시스템</span>
        <el-tag type="success" size="small">최대 10개 구매 가능</el-tag>
      </div>
    </template>

    <div class="row">
      <span>구매 수량 선택</span>
      <el-input-number v-model="productQuantity" :min="1" :max="10" />
    </div>

    <div class="row">
      <span>상품 만족도 별점</span>
      <el-rate v-model="productRate" show-score />
    </div>

    <el-divider />

    <div class="row">
      <span>결제 금액</span>
      <strong class="total">{{ totalPrice }}원</strong>
    </div>
  </el-card>
</template>

<style scoped>
.box-card {
  max-width: 460px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.total {
  font-size: 18px;
  color: #e8492f;
}
</style>
