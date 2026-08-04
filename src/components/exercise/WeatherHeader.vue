<script setup>
// 날씨 과제 화면들이 공통으로 쓰는 머리말.
// 화면 이동 링크와 단위 변경 버튼을 한 줄에 같이 둔다.
import UnitToggler from '@/components/exercise/UnitToggler.vue'
</script>

<template>
  <div class="weather-header">
    <nav class="weather-header__nav">
      <RouterLink to="/">🌧 날씨 대시보드</RouterLink>
      <span class="weather-header__divider">|</span>
      <RouterLink to="/about">ℹ️ 서비스 소개</RouterLink>
    </nav>

    <UnitToggler />
  </div>
</template>

<style scoped>
.weather-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid #dbe4ef;
}

.weather-header__nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.weather-header__nav a {
  color: #555;
  text-decoration: none;
  font-size: 14px;
}

.weather-header__nav a.router-link-exact-active {
  color: #2f7fe8;
  font-weight: bold;
  border-bottom: 2px solid #2f7fe8;
}

.weather-header__divider {
  color: #c7d2e0;
}
</style>
