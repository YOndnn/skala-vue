<script setup>
import { computed } from 'vue'
import { useConfigStore } from '@/stores/configStore.js'

// 상위의 반복문에서 풀려나온 개별 도시 데이터를 주입받는다
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const configStore = useConfigStore()

const displayTemp = computed(() => {
  const rawTemp = props.item.temp // 기본 원본 데이터는 섭씨 숫자
  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32) // 화씨 변환 연산
  }
  return rawTemp // 'celsius'일 때는 원본 그대로 반환
})

const emit = defineEmits(['select-card', 'click-detail'])

// 카드를 누르면 상태바에 띄울 안내 문구를 상위로 올려보낸다
const selectCard = () => {
  emit('select-card', `${props.item.name}이 선택되었습니다.`)
}

// 자세히
const clickDetail = () => {
  emit('click-detail', props.item)
}
</script>

<template>
  <div class="card" @click="selectCard">
    <div class="card-body">
      <p class="card-title">{{ item.name }} ({{ item.status }})</p>
      <p class="card-temp">현재 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</p>

      <span v-if="item.temp >= 28" class="badge badge-hot">🔥 더움 (28도 이상)</span>
      <span v-else-if="item.temp >= 25" class="badge badge-warm">🌤 따뜻함 (25~28도)</span>
      <span v-else class="badge badge-cool">🌬️ 선선함 (25도 미만)</span>
    </div>


    <div class="detail-area">
      <slot name="detail-button">
        <button class="detail-btn" @click.stop="clickDetail">자세히</button>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid #e3e8ef;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 8px;
  cursor: pointer;
}

.card:hover {
  background-color: #f6f9fd;
}

.card-body p {
  margin: 0 0 4px;
}

.card-title {
  font-weight: bold;
}

.card-temp {
  color: #555;
}

.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: white;
}

.badge-hot {
  background-color: #e8492f;
}

.badge-cool {
  background-color: #2f7fe8;
}

.badge-warm {
  background-color: #f9c347;
}

.detail-btn {
  flex-shrink: 0;
  padding: 4px 10px;
  border: 1px solid #c7d2e0;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}
</style>
