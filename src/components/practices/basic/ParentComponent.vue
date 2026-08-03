<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const state = ref('부모가 처음 가진 데이터');

const handleChildEvent = (message) => {
  state.value = message;
};
</script>

<template>
  <div class="box">
    <h3>상위 컴포넌트 (Parent)</h3>
    <p>현재 로컬 데이터(State): {{ state }}</p>
    <ChildComponent :message="state" @childEvent="handleChildEvent" />
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #2a2;
  padding: 12px;
}
</style>
