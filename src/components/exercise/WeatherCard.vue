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

// 온도 구간에 따라 el-tag의 색과 문구를 함께 정한다
const badge = computed(() => {
  if (props.item.temp >= 28) return { type: 'danger', text: '🔥 더움 (28도 이상)' }
  if (props.item.temp >= 25) return { type: 'warning', text: '🌤 따뜻함 (25~28도)' }
  return { type: 'primary', text: '🌬️ 선선함 (25도 미만)' }
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
  <el-card class="card" shadow="hover" @click="selectCard">
    <div class="card-inner">
      <div class="card-body">
        <p class="card-title">{{ item.name }} ({{ item.status }})</p>
        <p class="card-temp">현재 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</p>

        <el-tag :type="badge.type" effect="dark" round>{{ badge.text }}</el-tag>
      </div>

      <div class="detail-area">
        <slot name="detail-button">
          <el-button type="primary" plain size="small" @click.stop="clickDetail">
            자세히
          </el-button>
        </slot>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.card {
  margin-bottom: 8px;
  cursor: pointer;
}

.card-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.card-body p {
  margin: 0 0 6px;
}

.card-title {
  font-weight: bold;
}

.card-temp {
  color: #555;
}

.detail-area {
  flex-shrink: 0;
}
</style>
