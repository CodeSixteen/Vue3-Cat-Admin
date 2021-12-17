<script setup lang="ts">
import { computed, watch, inject } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const store: any = inject('store')
const route = useRoute()
const device = computed(() => store.state.app.device)
const fixedHeader = computed(() => store.state.app.fixedHeader)
const openSidebar = computed(() => store.state.app.openSidebar)
const classObj = computed(() => {
  return {
    hideSidebar: !openSidebar.value,
    openSidebar: openSidebar.value,
    mobile: device.value === 'mobile'
  }
})
const closeSidebar = () => {
  store.dispatch('app/closeSidebar')
}
watch(route, () => {
  if (device.value === 'mobile') {
    closeSidebar()
  }
})
</script>

<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile' && openSidebar" class="drawer-bg" @click="closeSidebar" />
    <div class="sidebar-container">
      <!-- 侧边菜单 -->
      <div style="height: 2000px;"></div>
    </div>
    <div class="main-container">
      <!-- 顶部 -->
      <Navbar></Navbar>
      <div :class="{ 'page-container': fixedHeader }">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drawer-bg{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000000;
  opacity: .5;
}
.app-wrapper {
  height: 100%;
  & .sidebar-container {
    width: $sideBarWidth;
    background-color: $menuBg;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    transition: all .3s;
  }
  & .main-container {
    min-height: 100%;
    background-color: #ffffff;
    margin-left: $sideBarWidth;
    box-sizing: border-box;
    overflow: hidden;
    transition: all .3s;
    .page-container {
      padding-top: $navbarHeight;
      position: relative;
    }
  }
}
</style>
