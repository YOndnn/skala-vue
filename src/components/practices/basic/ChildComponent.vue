<script setup>
defineProps(['message']);
const emit = defineEmits(['childEvent']);

const sendToParent = () => {
  emit('childEvent', 'Child에서 가공한 새로운 데이터');
};
</script>

<template>
  <div class="box">
    <h3>하위 컴포넌트 (Child)</h3>
    <p>수신된 Props 데이터: {{ message }}</p>
    <button @click="sendToParent">상위 컴포넌트로 갱신 요청 (Emit)</button>
  </div>
</template>

<style scoped>
.box {
  border: 1px dashed #888;
  padding: 12px;
}
</style>
