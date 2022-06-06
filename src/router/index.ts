import { createRouter, createWebHistory } from 'vue-router';
import { tabsStore } from '@/store/tabsStore.js';

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
  // 给自动组件加上对应的 name
  let d = routes.find(item => item.name === to.name);
  let d2 = await d.component();
  d2.default.name = to.name;
  // console.log('beforeEach');
  next();
});
beforeResolve((to, from, next) => {
  // console.log('beforeResolve');
  next();
});
afterEach((to, from, failure) => {
  // console.log('afterEach');
  tabsStore().routerAfterEach(to);
});
export default router;
