import { createRouter, createWebHistory } from 'vue-router';
import { afterEachs, beforeEachs } from '@/router/config';

export interface metaInterface {
  title: string
  keepAlive: boolean
}

export interface routersInterface {
  path: string,
  bane: string,
  component: any,
  meta: metaInterface
}

export const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '首页', keepAlive: true }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue'),
    meta: { title: '测试', keepAlive: false }
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import('@/views/test2/index.vue'),
    meta: { title: '测试2', keepAlive: false }
  },
  {
    path: '/qtable',
    name: 'qtable',
    component: () => import('@/views/qtable/index.vue'),
    meta: { title: '表格', keepAlive: true }
  },
  {
    path: '/qform',
    name: 'qform',
    component: () => import('@/views/form/index.vue'),
    meta: { title: '表单', keepAlive: true }
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

beforeEach(async (to, from, next) => {
  for (let each of beforeEachs) {
    await each(to, from, next);
  }
  next();
});
beforeResolve((to, from, next) => {
  next();
});
afterEach(async (to, from, failure) => {
  for (let each of afterEachs) {
    await each(to, from, failure);
  }
});
export default router;
