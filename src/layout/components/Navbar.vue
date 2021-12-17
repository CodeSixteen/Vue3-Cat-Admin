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
const avatar = computed(() => store.state.user.avatar)
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
      <div class="navbar-item is-click">
        <Hamburger :is-active="!openSidebar" @toggle-click="toggleSidebar"></Hamburger>
      </div>
    </div>
    <div class="navbar-right">
      <div class="navbar-item avatar">
        <img :src="avatar" :alt="username" />
      </div>
      <div class="navbar-item username">{{ username }}</div>
      <div class="navbar-item is-click logout" @click="logout">退出</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: $navbarHeight;
  background-color: #ffffff;
  box-shadow: 0 0 8px 1px #f1f3f4;
  display: flex;
  justify-content: space-between;
  .navbar-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .navbar-item {
    display: inline-block;
    height: $navbarHeight;
    line-height: $navbarHeight;
    &.is-click{
      cursor: pointer;
      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
  .avatar {
    padding: 0 8px;
    width: 56px;
    height: 50px;
    overflow: hidden;
    img {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      vertical-align: middle;
    }
  }
  .username {
    padding: 0 8px;
  }
  .logout {
    padding: 0 8px;
    color: $linkBtn;
  }
}
</style>
