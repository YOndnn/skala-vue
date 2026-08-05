<script setup>
// 라우터가 화면을 갈아끼우므로 App.vue는 뼈대(상단 바 + 목록 + 본문)만 갖는다.
// 날씨 과제의 화면 이동 링크와 단위 변경 버튼은 WeatherHeader.vue가 따로 갖는다.
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { practiceList, exerciseList, assignmentList, indexOf } from '@/data/practices'

const route = useRoute()

// 왼쪽 목록을 접었다 폈다
const isOpen = ref(true)
</script>

<template>
  <div class="layout">
    <header class="topbar">
      <span class="brand">SKALA-vue</span>
      <span class="subtitle">판교 8반 <br>이진호</span>
    </header>

    <!-- 접기·펼치기 한 버튼. 같은 자리에서 라벨만 바뀐다 -->
    <el-button class="toggle-btn" size="small" @click="isOpen = !isOpen">
      {{ isOpen ? '▲ 목록 접기' : '▼ 목록 펼치기' }}
    </el-button>

    <!-- 목록은 본문 위에 떠 있어서 자리를 차지하지 않는다 -->
    <aside class="sidebar" :class="{ 'sidebar--closed': !isOpen }">
      <el-menu :default-active="route.path" router class="side-menu">
        <el-menu-item-group title="과제">
          <el-menu-item index="/">
            <span class="menu-label">5. 라우터 활용 · 날씨 대시보드</span>
          </el-menu-item>
          <el-menu-item
            v-for="item in assignmentList"
            :key="item.label"
            :index="`/practices/${indexOf(item)}`"
          >
            <span class="menu-label" :title="item.label">
              {{ item.group.slice(0, 1) }}. {{ item.label }}
            </span>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group title="실습">
          <el-menu-item
            v-for="item in exerciseList"
            :key="item.label"
            :index="`/practices/${indexOf(item)}`"
          >
            <span class="menu-label" :title="item.label">
              {{ indexOf(item) + 1 }}. {{ item.label }}
            </span>
          </el-menu-item>

          <el-menu-item index="/practices">
            <span class="menu-label">전체 {{ practiceList.length }}개 한 페이지로 보기</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </aside>

    <!-- 목록이 펼쳐져 있으면 그만큼 비켜서, 남은 공간의 한가운데에 놓는다 -->
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  /* 상단 바 높이를 한 곳에서 정해두고 여러 곳이 같이 쓴다 */
  --topbar-height: 64px;

  min-height: 100vh;
  /* 상단 바가 fixed라 흐름에서 빠지므로, 그 높이만큼 자리를 비워둔다 */
  padding-top: var(--topbar-height);
}

/* 스크롤을 내려도 상단 바는 화면 위에 붙어 있는다 */
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 12px;
  height: var(--topbar-height);
  padding: 0 24px;
  background-color: white;
  border-bottom: 1px solid #dbe4ef;
}

.brand {
  font-weight: bold;
  color: #42b883;
}

/* 접기·펼치기 토글: 접든 펼치든 늘 같은 자리에 고정 */
.toggle-btn {
  position: fixed;
  top: calc(var(--topbar-height) + 17px);
  left: 24px;
  z-index: 30;
}

/* 본문 위에 완전히 떠 있는 목록. 본문은 밀리지 않고 늘 화면 한가운데 */
.sidebar {
  position: fixed;
  top: calc(var(--topbar-height) + 8px);
  bottom: 12px;
  left: 12px;
  z-index: 20;
  width: 250px;
  padding: 48px 0 8px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #dbe4ef;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.sidebar--closed {
  left: -280px;
}

.side-menu {
  border-right: none;
}

.side-menu :deep(.el-menu-item) {
  height: 34px;
  line-height: 34px;
  padding: 0 20px;
  font-size: 13px;
}

.menu-label {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* 본문은 목록과 무관하게 늘 화면 한가운데 */
.main {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.brand {
  font-weight: 1000;
  color: #11458a;
  font-size: 24px;
}

.subtitle {
  font-weight: 500;
  color: #020202;
  font-size: 14px;
  margin-left: auto;
  text-align: right;
}
</style>
