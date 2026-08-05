<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const userForm = ref({
  email: '',
  agree: false,
})

const handleRegister = () => {
  if (!userForm.value.email.includes('@')) {
    ElMessage.error(' 올바른 이메일 형식이 아닙니다.')
    return
  }
  if (!userForm.value.agree) {
    ElMessage.warning(' 이용약관에 동의하셔야 합니다.')
    return
  }
  ElMessage.success(' 가입 신청이 정상적으로 완료되었습니다!')
}
</script>

<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>📝 실습 1. 회원가입 Form &인풋 제어</span>
        <el-tag type="info" size="small">Element Plus</el-tag>
      </div>
    </template>

    <el-input v-model="userForm.email" placeholder="example@email.com" clearable>
      <template #prepend>Email</template>
    </el-input>

    <div class="agree-row">
      <span>개인정보 수집 및 필수 이용약관에 동의합니다.</span>
      <el-switch v-model="userForm.agree" active-text="동의" inactive-text="미동의" />
    </div>

    <el-button type="primary" class="submit-btn" @click="handleRegister">🚀 회원가입하기</el-button>
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

.agree-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
}

.submit-btn {
  width: 100%;
}
</style>
