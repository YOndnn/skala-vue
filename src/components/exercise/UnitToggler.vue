<script setup>
import { useConfigStore } from '@/stores/configStore.js'

const configStore = useConfigStore()
</script>

<template>
  <div class="unit-toggler">
    <span class="label">온도 단위</span>
    <button class="unit-btn" @click="configStore.toggleUnit">
      {{ configStore.unitSymbol }}
    </button>
  </div>
</template>

<style scoped>
.unit-toggler {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.label {
  color: #555;
}

.unit-btn {
  min-width: 44px;
  padding: 4px 10px;
  border: 1px solid #c7d2e0;
  border-radius: 999px;
  background-color: white;
  cursor: pointer;
}

.unit-btn:hover {
  background-color: #f1f5fa;
}
</style>
