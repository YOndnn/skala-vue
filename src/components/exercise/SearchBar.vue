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

  <!-- 한글 입력 처리를 위해 v-model 대신 :value + @input -->
  <input
    class="search-input"
    placeholder="검색할 도시 이름 입력"
    :value="query"
    @input="emit('update-query', $event.target.value)"
  />

  <p class="search-echo">검색 중인 도시: {{ query }}</p>
</template>

<style scoped>
.search-input {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #c7d2e0;
  border-radius: 4px;
  box-sizing: border-box;
}

.search-echo {
  margin: 8px 0 0;
  color: #666;
}
</style>
