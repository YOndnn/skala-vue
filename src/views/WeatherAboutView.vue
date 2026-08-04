<script setup>
import { useRouter } from 'vue-router'
import WeatherDashboardCard from '@/components/exercise/WeatherDashboardCard.vue'
import WeatherHeader from '@/components/exercise/WeatherHeader.vue'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="about">
    <WeatherHeader />

    <h2>ℹ️ 서비스 소개</h2>

    <WeatherDashboardCard>
      <h3>본 앱은 Vue3 및 Vue Router를 사용하여 개발되었습니다.</h3>
      <ol class="requirements">
        <ul>
          <li>components/exercise/ 폴더 내부의 독립 부품 연동</li>
          <li>클라이언트 사이드 라우팅을 통한 새로고침 없는 화면 전환</li>
          <li>URL 쿼리 스트링 매핑을 활용한 실시간 검색 상태 동기화</li>
        </ul>
      </ol>
    </WeatherDashboardCard>

    <button class="back-btn" @click="goHome">대시보드 홈으로 이동</button>
  </div>
</template>

<style scoped>
.about {
  max-width: 720px;
  font-size: 14px;
}

.about h3 {
  margin: 0 0 10px;
  font-size: 17px;
  font-weight: 550;
}

.requirements {
  margin: 0;
  padding-left: 18px;
}

.requirements > li {
  margin-bottom: 8px;
}

.requirements ul {
  margin: 4px 0 0;
  padding-left: 18px;
  color: #555;
}

.back-btn {
  padding: 6px 12px;
  border: 1px solid #c7d2e0;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  width: 100%;
  padding: 10px 20px;
  white-space: nowrap;
}

.about button {
  background-color: rgb(97, 167, 241);
  color: white;
  border: none;
  font-size: 14px;
  font-weight: 680;
}
</style>
