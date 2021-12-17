<script setup lang="ts">
import { computed, ref, inject, reactive } from 'vue'
const store: any = inject('store')
const username = computed(() => store.state.user.username)
let openSidebar = ref(true)
const onToggle = () => {
  openSidebar.value = !openSidebar.value
}

const tableData = reactive([{
  id: '141'
}])

</script>

<template>
  <div style="margin: 16px;">
    <el-table :data="tableData" border>
      <el-table-column label="ID" prop="id"></el-table-column>
    </el-table>
  </div>
</template>
