<script setup>
import home from '@/assets/svg/home.svg?raw'
import goods from '@/assets/svg/goods.svg?raw'
import other from '@/assets/svg/other.svg?raw'
import about from '@/assets/svg/about.svg?raw'
import {onMounted, onUnmounted, ref, watch} from "vue";

const props = defineProps({
  showTab: Boolean,
  activePath: String
})
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();
const Refs = ref([]);
const active = ref(0);
const tabs = ref([
  {
    key: '/home',
    title: '首页',
    icon: home
  },
  {
    key: '/goods',
    title: '商品',
    icon: goods
  },
  {
    key: '/other',
    title: '其他',
    icon: other
  },
  {
    key: '/about',
    title: '关于',
    icon: about
  },
]);

const changeActive = (index) => {
  if (active.value === index) {
    return false
  }
  active.value = index;
  router.push(tabs.value[index].key);
  resetAnimate();
  const el = Refs.value[index].querySelectorAll('svg path, svg circle');
  el.forEach((element) => {
    let length;
    if (element.tagName === 'CIRCLE') {
      length = 2 * Math.PI * element.getAttribute('r');
    } else {
      length = element.getTotalLength();
    }
    element.style.strokeDasharray = length;
    element.style.strokeDashoffset = length;
    element.getBoundingClientRect(); // Trigger layout to make sure the animation starts
    element.style.transition = 'stroke-dashoffset .8s ease';
    element.style.strokeDashoffset = '0';
  });
};

const resetAnimate = () => {
  Refs.value.forEach((item) => {
    const el = item.querySelectorAll('svg path, svg circle');
    el.forEach((element) => {
      element.style.transition = 'none';
      element.style.strokeDasharray = '';
      element.style.strokeDashoffset = '';
    });
  });
};

const watchStop = watch(props, () => {
  const index = tabs.value.findIndex((item) => props.activePath.includes(item.key));
  changeActive(index)
})
onUnmounted(() => {
  watchStop();
})
</script>

<template>
  <div class="tab-bar" v-show="showTab">
    <div class="tab-bar-item" v-for="(item, index) in tabs" :key="item.key" :class="{ active: active === index }">
      <div class="tab-item-icon" @click="changeActive(index)" ref="Refs">
        <div v-html="item.icon"></div>
      </div>
      <div class="tab-item-label" @click="changeActive(index)">{{ item.title }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tab-bar {
  bottom: env(safe-area-inset-bottom);
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

  .tab-bar-item {
    padding: 10px;
    text-align: center;
    flex: 1;
  }

  .tab-item-icon {
    svg {
      width: 24px;
      height: 24px;
    }

    margin-bottom: 5px;
  }

  .tab-item-label {
    font-size: 12px;
  }

  .tab-bar-item.active {
    .tab-item-icon,
    .tab-item-label {
      color: #007bff;
    }
  }
}

.animated {
  transition: stroke-dashoffset 2s ease;
  stroke-dashoffset: 0;
}
</style>
