<script setup>
import { useRouter } from 'vue-router'
import WeatherDashboardCard from '@/components/exercise/WeatherDashboardCard.vue'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="not-found">
    <WeatherDashboardCard>
      <h1>☀️ ❓</h1>
      <h2>페이지를 찾을 수 없습니다.</h2>

      <p>요청하신 주소가 존재하지 않거나,</p>
      <p>아직 개발되지 않았습니다.</p>
      <button class="back-btn" @click="goHome">날씨 메인으로 이동</button>
    </WeatherDashboardCard>
  </div>
</template>

<style scoped>
.not-found {
  max-width: 420px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
}

.not-found p {
  margin: 0 0 6px;
}

.back-btn {
  padding: 12px 18px;
  border: 0px solid #1f77eb;
  border-radius: 18px;
  background-color: rgba(25, 131, 245, 0.374);
  cursor: pointer;
}

.not-found h1 {
  font-size: 100px;
  margin: 0 0 12px;
}
</style>
