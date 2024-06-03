<script setup>

import { useRouter } from 'vue-router'
const Router = useRouter()
const handleClick = () => {
  Router.go(-1)
}

defineProps({
  title:String,
  showNav:Boolean
})

</script>

<template>
<div>
  <t-navbar v-if="showNav" :title="title" :fixed="false" left-arrow @left-click="handleClick"/>
</div>
</template>

<style scoped>

</style>