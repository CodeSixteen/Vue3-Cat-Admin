<script setup lang="ts">
import { deviceEnquire, DEVICE_TYPE } from './utils/device'
import { onMounted, provide } from 'vue'
import { useStore } from '@/store'

const store = useStore()
provide('store', store)
onMounted(() => {
  deviceEnquire((deviceType: string) => {
    switch (deviceType) {
      case DEVICE_TYPE.DESKTOP:
        store.commit('app/TOGGLE_DEVICE', 'desktop')
        store.dispatch('app/openSidebar')
        break
      case DEVICE_TYPE.TABLET:
        store.commit('app/TOGGLE_DEVICE', 'tablet')
        store.dispatch('app/closeSidebar')
        break
      case DEVICE_TYPE.MOBILE:
      default:
        store.commit('app/TOGGLE_DEVICE', 'mobile')
        store.dispatch('app/closeSidebar')
        break
    }
  })
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
