<script setup>
import Footer from './footer.vue'
import Header from './header.vue'
import {onUnmounted, ref, watch} from "vue";
import {useTitleStore} from "@/store/index.js";

const title = ref('')
const showNav = ref(false)
const showTab = ref(false)
const store = useTitleStore()
const activePath = ref('')
const watchStop = watch(store, () => {
  title.value = store.title
  showNav.value = store.showNav
  showTab.value = store.showTab
  activePath.value = store.activePath
}, {immediate: true, deep: true})
onUnmounted(() => {
  watchStop()
})
</script>

<template>
  <div class="main">
    <Header :title="title" :show-nav="showNav" class="header"/>
    <div class="inner">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition mode="out-in" name="fade">
            <KeepAlive>
              <Suspense>
                <component :is="Component"></component>
                <template #fallback>
                  正在加载...
                </template>
              </Suspense>
            </KeepAlive>
          </Transition>
        </template>
      </RouterView>
    </div>
    <Footer class="footer" :show-tab="showTab" :active-path="activePath"></Footer>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .inner {
    flex: 1;
    overflow: auto;
  }

  .footer {
    width: 100%;
  }
}
</style>
