<script setup>
// 상위가 들고 있는 검색어를 받아서 화면에 보여주기만 한다
defineProps({
  query: {
    type: String,
    required: true,
  },
})

// 글자가 입력될 때마다 검색어를 상위로 올려보낸다
const emit = defineEmits(['update-query'])
</script>

<template>
  <h3>🔍 도시 검색</h3>

  <!--
    el-input은 한글 조합 중에 input 이벤트를 막아서 한 글자씩 밀린다.
    그래서 교재대로 기본 input에 :value + @input을 쓰고, 겉모습만 맞춘다.
  -->
  <input
    class="search-input"
    placeholder="검색할 도시 이름 입력"
    :value="query"
    @input="emit('update-query', $event.target.value)"
  />

  <p class="search-echo">
    검색 중인 도시:
    <el-tag v-if="query" size="small" type="info">{{ query }}</el-tag>
    <span v-else class="search-echo__empty">전체</span>
  </p>
</template>

<style scoped>
.search-input {
  width: 100%;
  height: 32px;
  padding: 0 11px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: inherit;
  color: #606266;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:hover {
  border-color: #c0c4cc;
}

.search-input:focus {
  border-color: #409eff;
}

.search-input::placeholder {
  color: #a8abb2;
}

.search-echo {
  margin: 10px 0 0;
  color: #666;
}

.search-echo__empty {
  color: #aaa;
}
</style>
