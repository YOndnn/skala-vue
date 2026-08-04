<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import WeatherDashboardCard from './WeatherDashboardCard.vue'
import SearchBar from './SearchBar.vue'
import WeatherCard from './WeatherCard.vue'

const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
])

const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')

// 실시간 검색 필터링: 검색어가 도시 이름에 포함된 항목만 노출
const filteredWeatherList = computed(() =>
  weatherList.value.filter((item) => item.name.includes(searchQuery.value)),
)

// SearchBar가 올려보낸 검색어를 받는다
const updateQuery = (newQuery) => {
  searchQuery.value = newQuery
}

// WeatherCard가 올려보낸 안내 문구를 상태바에 반영한다
const selectCard = (message) => {
  selectedCityInfo.value = message
}

// 팝업에 도시 보여줌
const detailItem = ref(null)
const clickDetail = (item) => {
  detailItem.value = item
}
const closeDetail = () => {
  detailItem.value = null
}
const tempStatus = (temp) => {
  if (temp >= 28) return 'temp-hot'
  else if (temp >= 25) return 'temp-warm'
  else return 'temp-cool'
}

// 상태바 문구가 바뀔 때마다 로그 기록
watch(selectedCityInfo, (newValue) => {
  console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${newValue}"`)
})

// 최초 실행 + 검색어 변경마다 백엔드 통신 시뮬레이션 로그 출력
watchEffect(() => {
  console.log(
    `🤖 [watchEffect 자동 호출] 현재 검색어 '${searchQuery.value}'에 매칭되는 API 데이터를 필터링합니다`,
  )
})
</script>

<template>
  <div class="dashboard">
    <h2>🌤 과제 3: 날씨 대시보드 컴포넌트 구조화</h2>

    <!-- 검색박스: 공통 박스 안에 검색 폼을 주입 -->
    <WeatherDashboardCard>
      <SearchBar :query="searchQuery" @update-query="updateQuery" />
    </WeatherDashboardCard>

    <!-- 리스트박스: 공통 박스 안에 제목과 카드 목록을 주입 -->
    <WeatherDashboardCard>
      <h3>📊 지역별 날씨 현황</h3>

      <WeatherCard
        v-for="item in filteredWeatherList"
        :key="item.id"
        :item="item"
        @select-card="selectCard"
        @click-detail="clickDetail"
      />
    </WeatherDashboardCard>

    <p class="status-bar">{{ selectedCityInfo }}</p>

    <!-- 자세히 팝업: detailItem이 null이면 안 보인다 -->
    <div v-if="detailItem" class="popup">
      <p>
        {{ detailItem.name }}의 현재 날씨는 <strong>{{ detailItem.status }}</strong> 상태이고,
        기온은 <span :class="tempStatus(detailItem.temp)">{{ detailItem.temp }}°C</span> 입니다.
      </p>
      <button @click="closeDetail">닫기</button>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 420px;
  font-size: 14px;
}

.status-bar {
  margin: 0;
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  background-color: #eaf7ef;
  color: #2b7a4b;
}

.popup {
  border: 1px solid #c7d2e0;
  border-radius: 6px;
  padding: 12px;
  margin-top: 10px;
  background-color: #fff;
}

/* base.css의 * { font-weight: normal }이 strong까지 풀어버려서 다시 지정한다 */
.popup strong {
  font-weight: bold;
}

.temp-hot {
  color: #e8492f;
  font-weight: bold;
}

.temp-warm {
  color: #e8a52f;
  font-weight: bold;
}

.temp-cool {
  color: #2f7fe8;
  font-weight: bold;
}
</style>
