<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits<{
  (event: 'toggleClick'): void
}>()
const toggleClick = () => {
  emit('toggleClick')
}
</script>

<template>
  <div style="padding: 0 15px" @click="toggleClick">
    <svg-icon :class="{ 'is-active': isActive }" class="hamburger" name="hamburger" />
  </div>
</template>

<style lang="scss" scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  &.is-active {
    transform: rotate(180deg);
  }
}
</style>
