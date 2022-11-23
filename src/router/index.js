import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

import loadable from "@/utils/loadable"

Vue.use(VueRouter)

// 自动生成路由，不建议路由自动配置，可配置性比较低
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: loadable(() => import('../views/lesson/index.vue')) // 默认白页，加载完毕再去渲染 prefetch -> loading
  },
  {
    path: '/user',
    name: 'profile',
    component: loadable(() => import('../views/profile/index.vue'))
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
