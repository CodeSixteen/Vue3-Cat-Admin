<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'
const store = useStore()
const username = computed(() => store.state.user.username)
</script>

<template>
  <div>首页</div>
  <div>{{ username }}</div>
</template>
