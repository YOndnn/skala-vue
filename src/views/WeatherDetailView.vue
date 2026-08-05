<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import WeatherDashboardCard from '@/components/exercise/WeatherDashboardCard.vue'
import WeatherHeader from '@/components/exercise/WeatherHeader.vue'
import { useConfigStore } from '@/stores/configStore.js'
import { fetchCity, findCityMeta } from '@/api/weather'

const route = useRoute()
const router = useRouter()
const configStore = useConfigStore()

const city = ref(null)
const isLoading = ref(false)
const errorMessage = ref('')

// 동적 경로의 :cityId를 받아 Mount 시점에 그 도시 날씨를 서버에서 가져온다
onMounted(async () => {
  const meta = findCityMeta(route.params.cityId)
  if (!meta) return

  isLoading.value = true
  try {
    city.value = await fetchCity(meta)
    console.log('상세 날씨 연동 성공:', city.value)
  } catch (error) {
    errorMessage.value = '날씨 데이터를 가져오지 못했습니다. API 키를 확인하세요.'
    console.error('상세 날씨 연동 실패:', error)
  } finally {
    isLoading.value = false
  }
})

const displayTemp = computed(() => {
  const rawTemp = city.value?.temp // 기본 원본 데이터는 섭씨 숫자
  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32) // 화씨 변환 연산
  }
  return rawTemp // 'celsius'일 때는 원본 그대로 반환
})

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="detail">
    <WeatherHeader />

    <h2>🔎 지역별 상세 기상관측</h2>

    <WeatherDashboardCard>
      <el-skeleton v-if="isLoading" :rows="4" animated />

      <el-alert v-else-if="errorMessage" type="error" :closable="false" show-icon>
        {{ errorMessage }}
      </el-alert>

      <template v-else-if="city">
        <h3>📍지정 지역: {{ city.name }} ({{ city.status }})</h3>

        <!-- 라벨과 값이 짝지어진 정보라 el-descriptions가 딱 맞는다 -->
        <el-descriptions :column="2" border>
          <el-descriptions-item label="기온">
            {{ displayTemp }}{{ configStore.unitSymbol }}
          </el-descriptions-item>
          <el-descriptions-item label="습도">{{ city.humidity }}%</el-descriptions-item>
          <el-descriptions-item label="풍속">{{ city.wind }}m/s</el-descriptions-item>
          <el-descriptions-item label="강수량">{{ city.rainfall }}mm</el-descriptions-item>
          <el-descriptions-item label="관측 시각">{{ city.observedAt }}</el-descriptions-item>
          <el-descriptions-item label="도시 코드">{{ city.id }}</el-descriptions-item>
        </el-descriptions>

        <el-alert class="advice" type="info" :closable="false" show-icon>
          {{ city.temp >= 28 ? '외출 시 물을 챙기세요.' : '가볍게 걸치고 나가기 좋습니다.' }}
        </el-alert>
      </template>

      <el-empty
        v-else
        :description="`'${route.params.cityId}' 에 해당하는 도시를 찾지 못했습니다.`"
        :image-size="80"
      />
    </WeatherDashboardCard>

    <el-button @click="goHome">← 메인 대시보드로 돌아가기</el-button>
  </div>
</template>

<style scoped>
.detail {
  max-width: 900px;
  font-size: 14px;
}

.detail h3 {
  margin: 0 0 10px;
  font-size: 14px;
}

.observation {
  margin: 0 0 10px;
  padding-left: 18px;
}

.observation li {
  margin-bottom: 4px;
}

.advice {
  margin-top: 12px;
}

.error {
  color: #e8492f;
}

.back-btn {
  color: white;
  padding: 6px 12px;
  border: 1px solid #c7d2e0;
  border-radius: 4px;
  background-color: #3d4550;
  cursor: pointer;
}
.WeatherDashboardCard {
  color: #b3b6ba;
  padding: 16px;
  border-radius: 12px;
}
.panel {
  border: 1px solid #babcbe;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  background-color: #e2e6e8;   /* 이 줄을 추가 */
}
</style>
