<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import WeatherDashboardCard from '@/components/exercise/WeatherDashboardCard.vue'
import WeatherHeader from '@/components/exercise/WeatherHeader.vue'
import SearchBar from '@/components/exercise/SearchBar.vue'
import WeatherCard from '@/components/exercise/WeatherCard.vue'
import { fetchAllCities } from '@/api/weather'

const route = useRoute()
const router = useRouter()

// OpenWeatherMap에서 받아올 실시간 날씨 데이터
const weatherList = ref([])
const isLoading = ref(false)
const errorMessage = ref('')

onMounted(async () => {
  isLoading.value = true
  try {
    weatherList.value = await fetchAllCities()
    console.log('실시간 날씨 연동 성공:', weatherList.value)
  } catch (error) {
    errorMessage.value = '날씨 데이터를 가져오지 못했습니다. API 키를 확인하세요.'
    console.error('실시간 날씨 연동 실패:', error)
  } finally {
    isLoading.value = false
  }
})

// 검색어를 주소창의 쿼리 스트링(?q=부산)으로 관리한다
const searchQuery = computed(() => route.query.q ?? '')

// 검색어가 바뀌면 히스토리를 쌓지 않도록 replace로 주소만 갈아끼운다
const updateQuery = (newQuery) => {
  router.replace({ query: newQuery ? { q: newQuery } : {} })
}

const filteredWeatherList = computed(() =>
  weatherList.value.filter((item) => item.name.includes(searchQuery.value)),
)

const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')

const selectCard = (message) => {
  selectedCityInfo.value = message
}

// 상세보기를 누르면 동적 라우트로 이동한다
const clickDetail = (item) => {
  router.push('/weather/' + item.id)
}

watch(selectedCityInfo, (newValue) => {
  console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${newValue}"`)
})
</script>

<template>
  <div class="dashboard">
    <WeatherHeader />

    <h2>🌤 날씨 대시보드</h2>

    <WeatherDashboardCard>
      <SearchBar :query="searchQuery" @update-query="updateQuery" />
    </WeatherDashboardCard>

    <WeatherDashboardCard>
      <h3>📊 지역별 날씨 현황</h3>

      <!-- 불러오는 동안 카드 모양 뼈대를 보여준다 -->
      <el-skeleton v-if="isLoading" :rows="3" animated />

      <el-alert v-else-if="errorMessage" type="error" :closable="false" show-icon>
        {{ errorMessage }}
      </el-alert>

      <template v-else>
        <WeatherCard
          v-for="item in filteredWeatherList"
          :key="item.id"
          :item="item"
          @select-card="selectCard"
          @click-detail="clickDetail"
        />

        <el-empty
          v-if="filteredWeatherList.length === 0"
          description="검색 결과가 없습니다."
          :image-size="80"
        />
      </template>
    </WeatherDashboardCard>

    <el-alert type="success" :closable="false" show-icon>{{ selectedCityInfo }}</el-alert>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 900px;
  font-size: 14px;
}

.empty {
  margin: 0;
  color: #888;
}

.error {
  margin: 0;
  color: #e8492f;
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
