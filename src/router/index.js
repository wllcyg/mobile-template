// src/router/index.js

import {createRouter, createWebHashHistory} from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home/index.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/About/index.vue')
    },
    {
        path: '/goods',
        name: 'goods',
        component: () => import('@/pages/Goods/index.vue')
    },
    {
        path: '/other',
        name: 'other',
        component: () => import('@/pages/Other/index.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
