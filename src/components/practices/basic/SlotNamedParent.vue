<script setup>
import SlotNamedChild from './SlotNamedChild.vue'
</script>

<template>
  <SlotNamedChild>
    <template v-slot:header>
      <h2>상단에 주입한 제목</h2>
    </template>

    <p>본문 텍스트 데이터 영역 매프 내용 기입</p>
  </SlotNamedChild>
</template>
