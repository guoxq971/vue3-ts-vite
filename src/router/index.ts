import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('../views/home/index.vue')
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
