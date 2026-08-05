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

// 자세히
const clickDetail = () => {
  emit('click-detail', props.item)
}
</script>

/** 날씨 카드 컴포넌트
 *  - 상위 컴포넌트에서 반복문으로 풀려나온 개별 도시 데이터를 props로 주입받아 표시한다.
 *  - 카드 클릭 시 상위 컴포넌트에 안내 문구를 올려보낸다.
 *  - 자세히 버튼 클릭 시 상위 컴포넌트에 해당 도시 데이터를 올려보낸다
<template>
  <div class="card" @click="selectCard">
    <div class="card-body">
      <p class="card-title">{{ item.name }} ({{ item.status }})</p>
      <p class="card-temp">현재 기온: {{ item.temp }}°C</p>

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
/* 배경색은 온도에 따라 다르게 표시 */
.badge-hot {
  background-color: #e8492f;
}

.badge-cool {
  background-color: #2f7fe8;
}

.badge-warm {
  background-color: #f9c347;
}

/* 자세히 버튼 영역은 카드 오른쪽 끝에 고정 */
.detail-btn {
  flex-shrink: 0;
  padding: 4px 10px;
  border: 1px solid #c7d2e0;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}
</style>
