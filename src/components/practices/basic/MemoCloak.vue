<script setup>
import { ref } from 'vue'

const name = ref('홍길동')
const age = ref(20)

//v-cloak 예제
const message = ref('느린 네트워크에서도 안전하게 출력되는 메시지!')

//event 예제
const position = ref('')
const tagName = ref('')
const getOnlyEvent = (e) => {
  position.value = `좌표: X=${e.clientX}, Y=${e.clientY}`
}
const getWihtParam = (name, e) => {
  tagName.value = `대상: ${name} / 클릭된 태그: ${e.target.tagName}`
}

//v-model
const text1 = ref('') // v-model용 변수
const text2 = ref('') // 원리 이해용 변수
</script>

<template>
  <div class="practice-section">
    <h2>v-memo 디렉티브 학습</h2>
    <div v-memo="[name]" style="padding: 20px; border: 1px solid #42b883; margin-bottom: 10px">
      <p>📦 v-memo 적용 영역 (기준: name)</p>
      <p>이름: {{ name }}</p>
      <p>나이: {{ age }} {name이 바뀌어야 얘도 갱신됨}</p>
    </div>
    <button @click="name = '이순신'">1. 이름 변경 (이순신)</button> &nbsp;
    <button @click="age++">2. 나이 한 살 추가 (age++)</button>
  </div>

  <br /><br />

  <!--vcloak 예제-->
  <div v-cloak class="practice-section">
    <h1>예제 2</h1>
    <h2>v-cloak 디렉티브 학습</h2>
    <p>{{ message }}</p>
  </div>

  <div class="practice-section">
    <h2>v-on 이벤트 객체($event) 활용</h2>
    <p>좌표: {{ position }}</p>
    <p>태그: {{ tagName }}</p>
    <button @click="getOnlyEvent">클릭 좌표 알아내기</button>
    <button @click="getWihtParam('회원A', $event)">회원 정보와 태그 확인</button>
  </div>

  <br /><br />

  <div class="practice-section">
    <h2>v-model 양방향 데이터 바인딩</h2>
    <h3>1) v-model 축약 문법 (양방향)</h3>
    <input type="text" v-model="text1" placeholder="여기에 입력하세요" />
    <p>
      입력된 값: <strong>{{ text1 }}</strong>
    </p>
    <h3>2) v-model의 내부 작동 원리 (단방향 + 이벤트)</h3>
    <input
      type="text"
      :value="text2"
      @input="(e) => (text2 = e.target.value)"
      placeholder="원리 파악용 입력창"
    />
    <p>
      입력된 값: <strong>{{ text2 }}</strong>
    </p>
  </div>
</template>

<style scoped>
[v-cloak] {
  display: none !important;
}
</style>
