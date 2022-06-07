import { routes } from '@/router/index';

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
export const beforeEachs = [
  componentInsertName
];
