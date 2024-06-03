import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import TDesign from 'tdesign-mobile-vue'
import 'normalize.css'
import 'tdesign-mobile-vue/es/style/index.css'
import { createPinia } from 'pinia'
import router from "@/router/index.js";

/**
 * @desc 可更改为按需引用
 * @link https://tdesign.tencent.com/mobile-vue/getting-started
 * */

const pinia = createPinia()

createApp(App).use(pinia).use(TDesign).use(router).mount('#app')
