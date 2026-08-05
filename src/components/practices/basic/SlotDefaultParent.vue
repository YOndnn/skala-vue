<script setup>
import SlotDefaultChild from './SlotDefaultChild.vue'
</script>

<template>
  <div style="padding: 20px">
    <h2>🧱 슬롯 레이아웃 주입 실습</h2>
    <hr />

    <SlotDefaultChild>
      <p>단순한 텍스트 문장을 주입합니다.</p>
    </SlotDefaultChild>
    <br />

    <SlotDefaultChild>
      <h3 style="color: #e74c3c">🔥 경고 상태</h3>
      <button>확인</button>
    </SlotDefaultChild>
  </div>
</template>
