import { createRouter, createWebHistory } from 'vue-router'

// 라우터 지연 로딩(Lazy Loading): 그 주소로 들어갈 때 해당 화면만 내려받는다
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'weather-home',
      component: () => import('../views/WeatherHomeView.vue'),
    },
    {
      // :cityId 자리에 city_01 같은 값이 들어온다
      path: '/weather/:cityId',
      name: 'weather-detail',
      component: () => import('../views/WeatherDetailView.vue'),
    },
    {
      path: '/about',
      name: 'weather-about',
      component: () => import('../views/WeatherAboutView.vue'),
    },
    {
      path: '/practices',
      name: 'practices',
      component: () => import('../views/PracticeListView.vue'),
    },
    {
      // 사이드바에서 고른 실습 하나만 보여준다
      path: '/practices/:index',
      name: 'practice-item',
      component: () => import('../views/PracticeItemView.vue'),
    },
    {
      // Catch-all Route: 위 라우트에 안 걸린 모든 주소를 받는다. 반드시 맨 마지막에 둔다
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
