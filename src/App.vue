<script setup>
// ===== 2. Vue 문법 =====
import SampleOne from './components/practices/basic/SampleOne.vue'
import SampleTwo from './components/practices/basic/SampleTwo.vue'
import VHtml from './components/practices/basic/VHtml.vue'
import VueDirective from './components/practices/basic/VueDirective.vue'
import VText from './components/practices/basic/VText.vue'
import VBind from './components/practices/basic/VBind.vue'
import StyleBind from './components/practices/basic/StyleBind.vue'
import VBindShortHand from './components/practices/basic/VBindShortHand.vue'
import VIfElseSample from './components/practices/basic/VIfElseSample.vue'
import VShowSample from './components/practices/basic/VShowSample.vue'
import VForSample from './components/practices/basic/VForSample.vue'
import VPreSample from './components/practices/basic/VPreSample.vue'
import MemoCloak from './components/practices/basic/MemoCloak.vue'
import VOnHandler from './components/practices/basic/VOnHandler.vue'
import VModifier from './components/practices/basic/VModifier.vue'
import VueStyle from './components/practices/basic/VueStyle.vue'

// ===== 3. Composition API =====
import RefExmpl from './components/practices/basic/RefExmpl.vue'
import ReactiveExmpl from './components/practices/basic/ReactiveExmpl.vue'
import ComputedExmpl from './components/practices/basic/ComputedExmpl.vue'
import WatchExmpl from './components/practices/basic/WatchExmpl.vue'
import WatchMultiExmpl from './components/practices/basic/WatchMultiExmpl.vue'
import WatchDeepExmpl from './components/practices/basic/WatchDeepExmpl.vue'
import WatchReactiveExmpl from './components/practices/basic/WatchReactiveExmpl.vue'
import WatchEffectExmpl from './components/practices/basic/WatchEffectExmpl.vue'
import WeatherExercise from './components/practices/basic/WeatherExercise.vue'

// ===== 4. Vue Component =====
import LifeCycle from './components/practices/basic/LifeCycle.vue'
import PropsEmitsParent from './components/practices/basic/PropsEmitsParent.vue'
import SlotDefaultParent from './components/practices/basic/SlotDefaultParent.vue'
import SlotNamedParent from './components/practices/basic/SlotNamedParent.vue'
import SlotScopedParent from './components/practices/basic/SlotScopedParent.vue'
import WeatherParent from './components/practices/basic/WeatherParent.vue'

// 교재 Code Challenge 순서대로 정리
const groups = [
  {
    title: '2. Vue 문법 · 학습환경 구성 (p.50)',
    items: [
      { label: '반응성 데이터 (Reactivity)', comp: SampleOne },
      { label: 'JavaScript in Text Interpolation', comp: SampleTwo },
    ],
  },
  {
    title: '2. Vue 문법 · Vue Directive (p.71)',
    items: [
      { label: 'v-html', comp: VHtml },
      { label: 'v-html (XSS 위협)', comp: VueDirective },
      { label: 'v-text', comp: VText },
      { label: 'v-bind (Class Binding)', comp: VBind },
      { label: 'v-bind (Style Binding)', comp: StyleBind },
      { label: 'v-bind (Same-name Shorthand)', comp: VBindShortHand },
      { label: 'v-if / v-else-if / v-else', comp: VIfElseSample },
      { label: 'v-show', comp: VShowSample },
      { label: 'v-for', comp: VForSample },
      { label: 'v-once', comp: VPreSample },
      { label: 'v-cloak / v-memo (+ $event, v-model 포함)', comp: MemoCloak },
    ],
  },
  {
    title: '2. Vue 문법 · Vue Event Handling (p.83)',
    items: [
      { label: 'v-on Event Handler', comp: VOnHandler },
      { label: 'Event Modifier (이벤트 수식어)', comp: VModifier },
    ],
  },
  {
    title: '2. Vue 문법 · Vue Form Handling & Style (p.90)',
    items: [{ label: 'Vue Style', comp: VueStyle }],
  },
  {
    title: '3. Composition API · Reactive State (p.100)',
    items: [
      { label: 'ref()', comp: RefExmpl },
      { label: 'reactive()', comp: ReactiveExmpl },
    ],
  },
  {
    title: '3. Composition API · Computed & Watchers (p.118)',
    items: [
      { label: 'computed()', comp: ComputedExmpl },
      { label: 'watch()', comp: WatchExmpl },
      { label: 'watch() Multi-Source', comp: WatchMultiExmpl },
      { label: 'watch() Deep', comp: WatchDeepExmpl },
      { label: 'watch() reactive 데이터', comp: WatchReactiveExmpl },
      { label: 'watchEffect()', comp: WatchEffectExmpl },
    ],
  },
  {
    title: '3. Composition API · [실습] 과제 (p.119)',
    items: [{ label: '날씨 대시보드 동적 기능 구현', comp: WeatherExercise }],
  },
  {
    title: '4. Vue Component · Component Lifecycle (p.129)',
    items: [{ label: 'Lifecycle Hook', comp: LifeCycle }],
  },
  {
    title: '4. Vue Component · Props & Emits (p.143)',
    items: [{ label: 'Props & Emits', comp: PropsEmitsParent }],
  },
  {
    title: '4. Vue Component · Component Slot (p.150)',
    items: [
      { label: 'Default Slot', comp: SlotDefaultParent },
      { label: 'Named Slot', comp: SlotNamedParent },
      { label: 'Scoped Slot', comp: SlotScopedParent },
    ],
  },
  {
    title: '4. Vue Component · [실습] 과제 (p.151)',
    items: [{ label: '날씨 대시보드 컴포넌트 구조화', comp: WeatherParent }],
  },
]

// 1번부터 쭉 번호를 매긴 평평한 목록
const list = groups.flatMap((g) => g.items.map((item) => ({ ...item, group: g.title })))
</script>

<template>
  <div class="page">
    <h1>Vue Code Challenge 전체 목록</h1>

    <section v-for="(item, i) in list" :key="item.label" class="item">
      <h2>{{ i + 1 }}. {{ item.label }}</h2>
      <p class="group">{{ item.group }}</p>
      <component :is="item.comp" />
    </section>
  </div>
</template>

<style scoped>
.page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
.item {
  padding: 20px 0 30px;
  border-bottom: 1px solid #eee;
}
.item h2 {
  margin: 0;
}
.group {
  margin: 4px 0 16px;
  color: #888;
  font-size: 13px;
}
</style>
