<script setup>
import {computed} from "vue";

const props = defineProps({
  name: String
})
const iconClass = computed(() => {
  return `svg-icon icon-${props.name}`
})
const iconPath = computed(() => {
  return `/${this.name}.svg`
})

</script>

<template>
  <svg :class="iconClass" aria-hidden="true">
    <use :xlink:href="iconPath"/>
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>