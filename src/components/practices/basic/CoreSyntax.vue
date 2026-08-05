<script setup>
import { ref } from 'vue'

// 실시간 화면 출력을 위한 Vue 상태값 (수정 금지)
const result1 = ref('')

// =================================================================
// 📝 [과제 1] 회원 명단 가공 및 VIP 추출 핸들러
// =================================================================
const runTask1 = () => {
  const members = ['김수원', '이서울', '박부산', '최대전']
  const rawData = { id: 101, grade: 'VIP', details: { score: 95 } }
  // [미션]
  // 1. members 배열에'박부산'이 포함(includes)되어 있는지 확인하여 담기 변수(memberContainsPark)에 담기
  // 2. rawData 객체에서 grade와 details 내부의 score를 비구조화 할당으로 한 줄로 추출하기.
  // 3. 추출한 변수들을 템플릿 리터럴을 사용하여 result1.value에 아래 양식으로 문자열 주입하기.
  // 양식: "부산 포함 여부: [결과] / 등급: [결과] / 점수: [결과]점"
  const memberContainsPark = members.includes('박부산')
  const {
    grade,
    details: { score },
  } = rawData

  result1.value = `부산 포함 여부: ${memberContainsPark} / 등급: ${grade} / 점수: ${score}점`
}
</script>

<template>
  <div class="quiz-container">
    <div class="card">
      <h3>과제 1. 데이터 추출 및 포맷팅</h3>
      <button @click="runTask1">과제 1 가동</button>
      <div class="console">결과창 1: {{ result1 }}</div>
    </div>
  </div>
</template>
