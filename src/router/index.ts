import { createRouter, createWebHistory } from 'vue-router';
import { tabsStore } from '@/store/tabsStore.ts';
import { useTool } from '@/utils/useTool/useTool.ts';

export interface metaInterface {
  title: string
  key: string
  keepAlive?: boolean
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

const { beforeEach, beforeResolve, afterEach } = router;

beforeEach((to, from, next) => {
  // console.log('beforeEach');
  next();
});
beforeResolve((to, from, next) => {
  // console.log('beforeResolve');
  next();
});
afterEach((to, from, failure) => {
  // console.log('afterEach');
  tabsStore().routerBeforeEach(to);
});
export default router;
