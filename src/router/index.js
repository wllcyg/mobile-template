// src/router/index.js

import {createRouter, createWebHashHistory} from 'vue-router';
import {useTitleStore} from "@/store/index.js";

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {showNav: false, showTab: true, title: '首页'},
                component: () => import('@/pages/Home/index.vue')
            },
            {
                path: '/home/list',
                name: 'homeList',
                meta: {showNav: true, showTab: false, title: '列表'},
                component: () => import('@/pages/home-list/index.vue')
            },
        ]
    },
    {
        path: '/about',
        name: 'about',
        meta: {showNav: false, showTab: true, title: '关于'},
        component: () => import('@/pages/About/index.vue')
    },
    {
        path: '/goods',
        name: 'goods',
        meta: {showNav: false, showTab: true, title: '商品'},
        component: () => import('@/pages/Goods/index.vue')
    },
    {
        path: '/other',
        name: 'other',
        meta: {showNav: false, showTab: true, title: '其他'},
        component: () => import('@/pages/Other/index.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    const store = useTitleStore()
    console.log(to,'this is a store')
    const {meta: {title,showTab,showNav},path} = to
    if (title) {
        document.title = title
    }
    store.setPage(title,showTab,showNav,path)
    next()
})
export default router;
