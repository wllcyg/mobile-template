<script setup>
import Swiper from '@/pages/Home/Swiper.vue'

import { useRouter } from 'vue-router'
const Router = useRouter()
const changePage = () => {
  Router.push('/home/list')
}
</script>

<template>
<div>
  <Swiper/>
  <t-button size="large" theme="primary" @click="changePage">跳转测试</t-button>
</div>
</template>

<style scoped>

</style>