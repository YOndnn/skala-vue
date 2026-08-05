// 교재 Code Challenge / 실습 과제 목록을 한 곳에 모아둔다.
// App.vue의 사이드바와 실습 화면이 같은 목록을 함께 쓴다.

// ===== 2. Vue 문법 =====
import SampleOne from '@/components/practices/basic/SampleOne.vue'
import SampleTwo from '@/components/practices/basic/SampleTwo.vue'
import CoreSyntax from '@/components/practices/basic/CoreSyntax.vue'
import CoreSyntaxTask2 from '@/components/practices/basic/CoreSyntaxTask2.vue'
import CoreSyntaxTask3 from '@/components/practices/basic/CoreSyntaxTask3.vue'
import VHtml from '@/components/practices/basic/VHtml.vue'
import VueDirective from '@/components/practices/basic/VueDirective.vue'
import VText from '@/components/practices/basic/VText.vue'
import VBind from '@/components/practices/basic/VBind.vue'
import StyleBind from '@/components/practices/basic/StyleBind.vue'
import VBindShortHand from '@/components/practices/basic/VBindShortHand.vue'
import VIfElseSample from '@/components/practices/basic/VIfElseSample.vue'
import VShowSample from '@/components/practices/basic/VShowSample.vue'
import VForSample from '@/components/practices/basic/VForSample.vue'
import VPreSample from '@/components/practices/basic/VPreSample.vue'
import MemoCloak from '@/components/practices/basic/MemoCloak.vue'
import VOnHandler from '@/components/practices/basic/VOnHandler.vue'
import VModifier from '@/components/practices/basic/VModifier.vue'
import VueStyle from '@/components/practices/basic/VueStyle.vue'

// ===== 3. Composition API =====
import RefExmpl from '@/components/practices/basic/RefExmpl.vue'
import ReactiveExmpl from '@/components/practices/basic/ReactiveExmpl.vue'
import ComputedExmpl from '@/components/practices/basic/ComputedExmpl.vue'
import WatchExmpl from '@/components/practices/basic/WatchExmpl.vue'
import WatchMultiExmpl from '@/components/practices/basic/WatchMultiExmpl.vue'
import WatchDeepExmpl from '@/components/practices/basic/WatchDeepExmpl.vue'
import WatchReactiveExmpl from '@/components/practices/basic/WatchReactiveExmpl.vue'
import WatchEffectExmpl from '@/components/practices/basic/WatchEffectExmpl.vue'
import WeatherExercise from '@/components/practices/basic/WeatherExercise.vue'

// ===== 4. Vue Component =====
import LifeCycle from '@/components/practices/basic/LifeCycle.vue'
import PropsEmitsParent from '@/components/practices/basic/PropsEmitsParent.vue'
import SlotDefaultParent from '@/components/practices/basic/SlotDefaultParent.vue'
import SlotNamedParent from '@/components/practices/basic/SlotNamedParent.vue'
import SlotScopedParent from '@/components/practices/basic/SlotScopedParent.vue'
import WeatherParent from '@/components/practices/basic/WeatherParent.vue'

// ===== 6. Pinia =====
import StoreCounter from '@/components/practices/library/StoreCounter.vue'

// ===== 7. Axios =====
import AxiosWeather from '@/components/practices/library/AxiosWeather.vue'
import AxiosJson from '@/components/practices/library/AxiosJson.vue'

// ===== 8. UI 라이브러리 =====
import ElementForm from '@/components/practices/library/ElementForm.vue'
import ElementProduct from '@/components/practices/library/ElementProduct.vue'
import ElementFeedback from '@/components/practices/library/ElementFeedback.vue'

// kind: 'exercise'(실습) / 'assignment'(과제)
export const groups = [
  {
    title: '2. Vue 문법 · 학습환경 구성 (p.50)',
    kind: 'exercise',
    items: [
      { label: '반응성 데이터 (Reactivity)', comp: SampleOne },
      { label: 'JavaScript in Text', comp: SampleTwo },
    ],
  },
  {
    title: '2. Vue 문법 · Vue Directive (p.71)',
    kind: 'exercise',
    items: [
      { label: 'v-html', comp: VHtml },
      { label: 'v-html (XSS 위협)', comp: VueDirective },
      { label: 'v-text', comp: VText },
      { label: 'v-bind (Class Binding)', comp: VBind },
      { label: 'v-bind (Style Binding)', comp: StyleBind },
      { label: 'v-bind (Shorthand)', comp: VBindShortHand },
      { label: 'v-if / v-else-if / v-else', comp: VIfElseSample },
      { label: 'v-show', comp: VShowSample },
      { label: 'v-for', comp: VForSample },
      { label: 'v-once', comp: VPreSample },
      { label: 'v-cloak / v-memo', comp: MemoCloak },
    ],
  },
  {
    title: '2. Vue 문법 · Vue Event Handling (p.83)',
    kind: 'exercise',
    items: [
      { label: 'v-on Event Handler', comp: VOnHandler },
      { label: 'Event Modifier', comp: VModifier },
    ],
  },
  {
    title: '2. Vue 문법 · Vue Form Handling & Style (p.90)',
    kind: 'exercise',
    items: [{ label: 'Vue Style', comp: VueStyle }],
  },
  {
    title: '3. Composition API · Reactive State (p.100)',
    kind: 'exercise',
    items: [
      { label: 'ref()', comp: RefExmpl },
      { label: 'reactive()', comp: ReactiveExmpl },
    ],
  },
  {
    title: '3. Composition API · Computed & Watchers (p.118)',
    kind: 'exercise',
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
    title: '4. Vue Component · Component Lifecycle (p.129)',
    kind: 'exercise',
    items: [{ label: 'Lifecycle Hook', comp: LifeCycle }],
  },
  {
    title: '4. Vue Component · Props & Emits (p.143)',
    kind: 'exercise',
    items: [{ label: 'Props & Emits', comp: PropsEmitsParent }],
  },
  {
    title: '4. Vue Component · Component Slot (p.150)',
    kind: 'exercise',
    items: [
      { label: 'Default Slot', comp: SlotDefaultParent },
      { label: 'Named Slot', comp: SlotNamedParent },
      { label: 'Scoped Slot', comp: SlotScopedParent },
    ],
  },
  {
    title: '6. Pinia · Store (counter.js) 작성하기 (p.190)',
    kind: 'exercise',
    items: [{ label: 'Counter Store 활용', comp: StoreCounter }],
  },
  {
    title: '7. Axios · Axios Example (p.208)',
    kind: 'exercise',
    items: [
      { label: 'OpenWeatherMap 호출', comp: AxiosWeather },
      { label: 'JSONPlaceholder CRUD', comp: AxiosJson },
    ],
  },
  {
    title: '8. UI 라이브러리 · Element Plus (p.225~227)',
    kind: 'exercise',
    items: [
      { label: '회원가입 폼', comp: ElementForm },
      { label: '상품 구매', comp: ElementProduct },
      { label: '파일 관리', comp: ElementFeedback },
    ],
  },
  {
    title: 'JavaScript Core Syntax · 실습',
    kind: 'exercise',
    items: [
      { label: 'Core Syntax 미션 1', comp: CoreSyntax },
      { label: 'Core Syntax 미션 2', comp: CoreSyntaxTask2 },
      { label: 'Core Syntax 미션 3', comp: CoreSyntaxTask3 },
    ],
  },
  {
    title: '3. Composition API · [실습] 과제 (p.119)',
    kind: 'assignment',
    items: [{ label: '날씨 대시보드 동적 기능 구현', comp: WeatherExercise }],
  },
  {
    title: '4. Vue Component · [실습] 과제 (p.151)',
    kind: 'assignment',
    items: [{ label: '날씨 대시보드 컴포넌트 구조화', comp: WeatherParent }],
  },
]

// 사이드바와 주소(/practices/:index)에서 쓸 평평한 목록
export const practiceList = groups.flatMap((group) =>
  group.items.map((item) => ({ ...item, group: group.title, kind: group.kind })),
)

export const exerciseList = practiceList.filter((item) => item.kind === 'exercise')
export const assignmentList = practiceList.filter((item) => item.kind === 'assignment')

export const indexOf = (item) => practiceList.indexOf(item)
