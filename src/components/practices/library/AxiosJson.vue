<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
// 💡 1. 백엔드 공용 주소
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

// 💡 2. 반응형 상태 데이터
const items = ref([]) // 서버에서 받아온 데이터 배열 박스
const textInput = ref('') // 입력창과 연결된 글자 데이터 박스

// ----------------------------------------------------
// [READ] GET : 데이터 가져오기
// ----------------------------------------------------
const handleRead = async () => {
  try {
    // 공부용으로 딱 3개만 들고 옵니다.
    const response = await axios.get(BASE_URL, { params: { _limit: 3 } })
    items.value = response.data
    console.log('GET 성공:', response.data)
  } catch (error) {
    console.error('GET 실패:', error)
  }
}

// ----------------------------------------------------
// [CREATE] POST : 데이터 새로 만들기
// ----------------------------------------------------
const handleCreate = async () => {
  try {
    // 두 번째 인자가 서버로 보낼 몸통 데이터. axios가 JSON으로 바꿔 보낸다
    const response = await axios.post(BASE_URL, {
      title: textInput.value,
      body: '연습용 본문',
      userId: 1,
    })
    // JSONPlaceholder는 실제로 저장하지 않고 만들어진 척 응답만 준다
    items.value.unshift(response.data)
    textInput.value = ''
    console.log('POST 성공:', response.data)
  } catch (error) {
    console.error('POST 실패:', error)
  }
}

// ----------------------------------------------------
// [UPDATE] PUT : 데이터 통째로 수정하기
// ----------------------------------------------------
const handleUpdate = async (item) => {
  try {
    // 주소 끝에 누구를 고칠지 id를 붙인다
    const response = await axios.put(`${BASE_URL}/${item.id}`, {
      ...item,
      title: `${item.title} (수정됨)`,
    })
    const index = items.value.findIndex((row) => row.id === item.id)
    items.value[index] = response.data
    console.log('PUT 성공:', response.data)
  } catch (error) {
    console.error('PUT 실패:', error)
  }
}

// ----------------------------------------------------
// [DELETE] DELETE : 데이터 삭제하기
// ----------------------------------------------------
const handleDelete = async (item) => {
  try {
    // 지울 대상만 알면 되니 보낼 몸통 데이터가 없다
    await axios.delete(`${BASE_URL}/${item.id}`)
    items.value = items.value.filter((row) => row.id !== item.id)
    console.log('DELETE 성공:', item.id)
  } catch (error) {
    console.error('DELETE 실패:', error)
  }
}

// 화면이 뜨자마자 목록을 한 번 불러온다
onMounted(handleRead)
</script>

<template>
  <div class="practice-section">
    <h2>⚡ Axios CRUD 프로토타입 훈련</h2>

    <div class="toolbar">
      <input v-model="textInput" placeholder="저장할 텍스트를 입력하세요" />
      <button class="btn-post" :disabled="!textInput" @click="handleCreate">POST (추가)</button>
    </div>

    <div v-for="item in items" :key="item.id" class="row">
      <div class="row-body">
        <p class="row-id">ID: {{ item.id }}</p>
        <p class="row-title">{{ item.title }}</p>
      </div>

      <div class="row-buttons">
        <button class="btn-put" @click="handleUpdate(item)">PUT (수정)</button>
        <button class="btn-del" @click="handleDelete(item)">DEL (삭제)</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.practice-section {
  max-width: 640px;
  font-size: 14px;
}

.toolbar {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
}

.toolbar input {
  flex: 1;
  padding: 6px 8px;
  border: 1px solid #c7d2e0;
  border-radius: 4px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 8px;
  border: 1px solid #e3e8ef;
  border-radius: 6px;
  background-color: #f8fafc;
}

.row-body p {
  margin: 0;
}

.row-id {
  color: #888;
  font-size: 12px;
}

.row-buttons {
  display: flex;
  flex-shrink: 0;
  gap: 6px;
}

button {
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: default;
}

.btn-post {
  background-color: #22a06b;
}

.btn-put {
  background-color: #e8a72f;
}

.btn-del {
  background-color: #e8492f;
}
</style>
