<script setup>
// 라우터가 화면을 갈아끼우므로 App.vue는 뼈대(상단 바 + 사이드바 + 본문)만 갖는다.
// 날씨 과제의 화면 이동 링크와 단위 변경 버튼은 WeatherHeader.vue가 따로 갖는다.
import { practiceList, exerciseList, assignmentList, indexOf } from '@/data/practices'
</script>

<template>
  <div class="layout">
    <header class="topbar">
      <span class="brand">skala-vue</span>
    </header>

    <div class="body">
      <!-- 왼쪽 목록: 과제 칸과 실습 칸으로 나눠 둔다 -->
      <aside class="sidebar">
        <nav class="section">
          <p class="section__title">과제</p>

          <RouterLink to="/" class="link">5. 라우터 활용 · 날씨 대시보드</RouterLink>

          <RouterLink
            v-for="item in assignmentList"
            :key="item.label"
            :to="`/practices/${indexOf(item)}`"
            class="link"
          >
            {{ item.group.slice(0, 1) }}. {{ item.label }}
          </RouterLink>
        </nav>

        <nav class="section">
          <p class="section__title">실습</p>

          <RouterLink
            v-for="item in exerciseList"
            :key="item.label"
            :to="`/practices/${indexOf(item)}`"
            class="link"
          >
            {{ indexOf(item) + 1 }}. {{ item.label }}
          </RouterLink>

          <RouterLink to="/practices" class="link link--all">
            전체 {{ practiceList.length }}개 한 페이지로 보기
          </RouterLink>
        </nav>
      </aside>

      <!-- 주소와 맞는 화면이 여기에 들어온다 -->
      <main class="main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 20px;
  border-bottom: 1px solid #dbe4ef;
}

.brand {
  font-weight: bold;
  color: #42b883;
}

.body {
  display: flex;
  align-items: flex-start;
  flex: 1;
}

.sidebar {
  flex-shrink: 0;
  width: 260px;
  padding: 16px 12px;
  border-right: 1px solid #dbe4ef;
  /* 본문을 내려도 목록은 자리에 남아 있게 한다 */
  position: sticky;
  top: 0;
  max-height: 100vh;
  overflow-y: auto;
}

.section + .section {
  margin-top: 20px;
}

.section__title {
  margin: 0 0 8px;
  padding-left: 8px;
  color: #888;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.05em;
}

.link {
  display: block;
  padding: 6px 8px;
  border-radius: 4px;
  color: #555;
  text-decoration: none;
  font-size: 13px;
  line-height: 1.4;
}

.link:hover {
  background-color: #f1f5fa;
}

.link.router-link-exact-active {
  background-color: #eaf7ef;
  color: #2b7a4b;
  font-weight: bold;
}

.link--all {
  margin-top: 8px;
  color: #888;
  font-size: 12px;
}

.main {
  flex: 1;
  min-width: 0;
  padding: 20px;
}

/* 화면이 좁으면 목록을 위로 올리고 가로폭을 다 쓴다 */
@media (max-width: 720px) {
  .body {
    flex-direction: column;
  }

  .sidebar {
    position: static;
    width: 100%;
    max-height: none;
    border-right: none;
    border-bottom: 1px solid #dbe4ef;
  }
}
</style>
