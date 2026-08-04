<template>
  <!-- 검색박스와 리스트박스가 공통으로 쓰는 박스 디자인. 안쪽은 상위가 채운다 -->
  <section class="panel">
    <slot>
      <p>내용이 주입되지 않았습니다.</p>
    </slot>
  </section>
</template>

<style scoped>
.panel {
  border: 1px solid #3a0000;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  font-size: 14px;
}

.panel :deep(h3) {
  margin: 0 0 10px;
  font-size: 14px;
}
</style>
