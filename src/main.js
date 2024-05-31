import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import TDesign from 'tdesign-mobile-vue'
import 'normalize.css'
import 'tdesign-mobile-vue/es/style/index.css'


import router from "@/router/index.js";
import SvgIcon from '@/components/Icon/Icon.vue'

/**
 * @desc 可更改为按需引用
 * @link https://tdesign.tencent.com/mobile-vue/getting-started
 * */
createApp(App).component('SvgIcon', SvgIcon).use(TDesign).use(router).mount('#app')
