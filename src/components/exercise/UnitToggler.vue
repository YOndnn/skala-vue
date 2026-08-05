<script setup>
import { useConfigStore } from '@/stores/configStore.js'

const configStore = useConfigStore()
</script>

<template>
  <div class="unit-toggler">
    <span class="label">온도 단위</span>
    <el-button class="unit-btn" size="small" round @click="configStore.toggleUnit">
      {{ configStore.unitSymbol }}
    </el-button>
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
}
</style>
