<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const downloadProgress = ref(0)
const isDownloading = ref(false)

const confirmDelete = () => {
  ElMessageBox.confirm('서버에서 해당 파일을 영구히 삭제하시겠습니까?', '🔥 최종 경고', {
    confirmButtonText: '네, 삭제합니다',
    cancelButtonText: '취소',
    type: 'warning',
  })
    .then(() => {
      ElMessage.success('🗑️ 파일이 안전하게 파쇄되었습니다.')
    })
    .catch(() => {
      ElMessage.info('❌ 삭제 작업이 취소되었습니다.')
    })
}

const startDownload = () => {
  if (isDownloading.value) return // 이미 돌고 있으면 중복 실행을 막는다

  isDownloading.value = true
  downloadProgress.value = 0

  const interval = setInterval(() => {
    downloadProgress.value += 20
    if (downloadProgress.value >= 100) {
      clearInterval(interval)
      isDownloading.value = false
      ElMessage.success('💾 대용량 데이터 로드가 완료되었습니다!')
    }
  }, 400)
}
</script>

<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>⚙️ 파일 관리</span>
        <el-tag type="danger" size="small">주의</el-tag>
      </div>
    </template>

    <div class="buttons">
      <el-button type="danger" @click="confirmDelete">삭제 테스트</el-button>
      <el-button type="primary" :loading="isDownloading" @click="startDownload">
        동기화 시작
      </el-button>
    </div>

    <el-progress
      :percentage="downloadProgress"
      :status="downloadProgress === 100 ? 'success' : ''"
    />
  </el-card>
</template>

<style scoped>
.box-card {
  max-width: 460px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
</style>
