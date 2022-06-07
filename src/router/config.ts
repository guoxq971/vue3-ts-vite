import { routes } from '@/router/index';
import { tabsStore } from '@/store/tabsStore';

/*
* 给组件添加name
* */

// @ts-ignore
async function componentInsertName (to, from, next) {
  // 给自动组件加上对应的 name
  let d: any = routes.find(item => item.name === to.name);
  let d2 = await d.component();
  d2.default.name = to.name;
  next();
}

/*
* tabs打开后的缓存
* */
// @ts-ignore
async function tabsInsert (to, from, failure) {
  tabsStore().routerAfterEach(to);
}

export const beforeEachs = [
  componentInsertName,
];
export const afterEachs = [
  tabsInsert,
];
