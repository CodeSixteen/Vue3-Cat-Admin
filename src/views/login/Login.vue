<script setup lang="ts">
import defaultSettings from '@/settings'
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons'
import { validatePassword } from '@/utils/validate'
import { timeFix } from '@/utils'
import { login } from '@/api/user'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'

const router = useRouter()
const route = useRoute()

const loginForm = reactive({
  username: 'admin',
  password: '123456'
})
const formRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, trigger: 'blur', validator: validatePassword }]
})

const elform = ref('')

const onLogin = () => {
  login(loginForm)
    .then(res => {
      localStorage.setItem('token', res.data)
      const redirect: any = route.query.redirect
      if (redirect) {
        router.push(redirect)
      } else {
        router.push('/')
      }
      ElNotification.success({
        title: '登录成功',
        message: `${timeFix()}，欢迎回来！`
      })
    })
    .catch(e => {
      console.log(e)
    })
}
</script>

<template>
  <div class="login-page">
    <div class="login-form">
      <div class="login-title">{{ defaultSettings.title }}</div>
      <el-form ref="elform" :model="loginForm" :rules="formRules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" :prefix-icon="User" clearable placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            :prefix-icon="Lock"
            type="password"
            clearable
            placeholder="登录密码"
          />
        </el-form-item>
        <el-button
          native-type="submit"
          type="primary"
          style="width: 100%"
          @keydown.enter.prevent="onLogin"
          @click.prevent="onLogin"
        >登录</el-button>
      </el-form>
    </div>

    <!-- footer -->
    <div class="footer">
      <div class="copyright">Copyright &copy; 2021 咻咻咻·技术组</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  min-height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
.login-form {
  padding: 160px 35px 0;
  position: relative;
  width: 460px;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}
.login-title {
  color: #eeeeee;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  margin: 48px 0 24px;
  text-align: center;
}
.copyright {
  color: #cccccc;
  font-size: 14px;
}
</style>
