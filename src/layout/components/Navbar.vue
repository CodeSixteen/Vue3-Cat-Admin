<script lang="ts" setup>
import { inject, computed } from 'vue'
import Hamburger from './Hamburger.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const store: any = inject('store')
const fixedHeader = computed(() => store.state.app.fixedHeader)
const openSidebar = computed(() => store.state.app.openSidebar)
const username = computed(() => store.state.user.username)

function toggleSidebar() {
  store.dispatch('app/toggleSidebar')
}
function logout() {
  store.dispatch('user/logout')
  .then(() => {
      router.push(`/login?redirect=${encodeURIComponent(route.fullPath)}`)
    })
    .catch((e: any) => {
      console.error(e)
    })
}
</script>

<template>
  <div class="navbar" :class="{ 'fixed-header': fixedHeader }">
    <div>
      <div class="navbar-item">
        <Hamburger :is-active="!openSidebar" @toggle-click="toggleSidebar"></Hamburger>
      </div>
    </div>
    <div>
      <div class="navbar-item username">{{ username }}</div>
      <div class="navbar-item logout" @click="logout">
        退出
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: $navbarHeight;
  background-color: #ffffff;
  box-shadow: 0 0 8px 1px #F1F3F4;
  display: flex;
  justify-content: space-between;
  .navbar-item{
    display: inline-block;
    height: $navbarHeight;
    line-height: $navbarHeight;
    cursor: pointer;
    &:hover{
      background-color: #f7f7f7;
    }
  }
  .logout{
    padding: 0 16px;
    color: $linkBtn;
  }
  .username{
    cursor: initial;
    &:hover{
      background-color: #ffffff;
    }
  }
}
</style>
