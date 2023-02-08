import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/three',
    name: 'three',
    component: () => import('../views/ThreeJsDemo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
