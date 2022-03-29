
<script setup lang="ts">
import { useUserStore } from '~/store/user'
import { login } from '~/api/user'

const userStore = useUserStore()
function clickLogin() {
  login({ username: 'admin', password: '123456' })
    .then((res) => {
      console.log(res.data)
    })
    .catch((e) => {
      console.log(e)
    })
}
</script>

<template>
  <div>
    <ElButton type="success" @click="clickLogin">
      Login
    </ElButton>
    <div class="h25 bg-gray">
      {{ userStore.username }}
    </div>
  </div>
</template>
