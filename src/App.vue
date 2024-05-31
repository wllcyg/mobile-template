<script setup>
import Footer from './footer.vue'
import Header from './header.vue'

</script>

<template>
  <div class="main">
    <Header class="header"/>
    <div class="inner">
      <router-view></router-view>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<style scoped lang="scss">
.main{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  .inner{
    flex: 1;
    overflow: auto;
  }
  .footer{
    width: 100%;
  }
}
</style>
