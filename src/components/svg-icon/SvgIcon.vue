<script setup lang="ts">
import { computed } from '@vue/reactivity'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})
const iconName = computed(() => '#icon-' + props.name)
const className = computed(() => `svg-icon icon-${props.name}`)

</script> 

<template>
  <svg v-bind="$attrs" :class="className" :style="{ color: color }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped>
.svg-icon{
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
