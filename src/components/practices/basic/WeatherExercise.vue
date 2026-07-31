<script setup>
import { ref } from 'vue'

const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
])

// 3. 양방향 바인딩 (한글 입력 처리를 위해 v-model 대신 :value + @input)
const searchText = ref('')

// 4. 상태바 메시지
const statusMessage = ref('카드를 클릭하거나 검색해 보세요.')

const selectCity = (cityName) => {
  statusMessage.value = `${cityName}이 선택되었습니다.`
}

const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <div class="practice-section">
    <h2>🌤 과제 1: 날씨 (Mockup)</h2>

    <!-- ===== 도시 검색 ===== -->
    <section class="panel">
      <h3>🔍 도시 검색</h3>
      <input
        class="search-input"
        placeholder="검색할 도시 이름 입력"
        :value="searchText"
        @input="searchText = $event.target.value"
      />
      <p class="search-echo">검색 중인 도시: {{ searchText }}</p>
    </section>

    <!-- ===== 지역별 날씨 현황 ===== -->
    <section class="panel">
      <h3>📊 지역별 날씨 현황</h3>

      <div
        v-for="item in weatherList"
        :key="item.id"
        class="card"
        @click="selectCity(item.name)"
      >
        <div class="card-body">
          <p class="card-title">{{ item.name }} ({{ item.status }})</p>
          <p class="card-temp">현재 기온: {{ item.temp }}°C</p>

          <span v-if="item.temp >= 25" class="badge badge-hot">🔥 더움 (25도 이상)</span>
          <span v-else class="badge badge-cool">❄️ 선선함 (25도 미만)</span>
        </div>

        <button class="detail-btn" @click.stop="showDetail(item.name, item.status)">
          상세보기
        </button>
      </div>
    </section>

    <!-- ===== 상태바 ===== -->
    <p class="status-bar">{{ statusMessage }}</p>
  </div>
</template>

<style scoped>
.practice-section {
  max-width: 420px;
  font-size: 14px;
}

.panel {
  border: 1px solid #dbe4ef;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
}

.panel h3 {
  margin: 0 0 10px;
  font-size: 14px;
}

.search-input {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #c7d2e0;
  border-radius: 4px;
  box-sizing: border-box;
}

.search-echo {
  margin: 8px 0 0;
  color: #666;
}

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

.status-bar {
  margin: 0;
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  background-color: #eaf7ef;
  color: #2b7a4b;
}
</style>
