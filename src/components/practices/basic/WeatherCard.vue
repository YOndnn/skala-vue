<script setup>
// 상위의 반복문에서 풀려나온 개별 도시 데이터를 주입받는다
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select-card', 'click-detail'])

// 카드를 누르면 상태바에 띄울 안내 문구를 상위로 올려보낸다
const selectCard = () => {
  emit('select-card', `${props.item.name}이 선택되었습니다.`)
}

// 상세보기는 카드 클릭까지 같이 터지지 않도록 @click.stop으로 전파를 끊는다
const clickDetail = () => {
  emit('click-detail', props.item)
}
</script>

<template>
  <div class="card" @click="selectCard">
    <div class="card-body">
      <p class="card-title">{{ item.name }} ({{ item.status }})</p>
      <p class="card-temp">현재 기온: {{ item.temp }}°C</p>

      <span v-if="item.temp >= 25" class="badge badge-hot">🔥 더움 (25도 이상)</span>
      <span v-else class="badge badge-cool">❄️ 선선함 (25도 미만)</span>
    </div>

    <button class="detail-btn" @click.stop="clickDetail">상세보기</button>
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

.detail-btn {
  flex-shrink: 0;
  padding: 4px 10px;
  border: 1px solid #c7d2e0;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}
</style>
