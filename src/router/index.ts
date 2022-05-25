import { createRouter, createWebHistory } from 'vue-router';

export interface metaInterface {
  title: string
  keepAlive: boolean
}

const routes = [
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '首页', keepAlive: true },
  },
  {
    path: '/test',
    component: () => import('@/views/test/index.vue'),
    meta: { title: '测试', keepAlive: false },
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
