import { defineStore } from 'pinia';

export interface stateTypes {
  msg: string,
  counter: number
}

// 创建 store
export const mainStore = defineStore({
  id: 'app-main', // 唯一 ID，可以配合 Vue devtools 使用
  state: (): stateTypes => ({
    msg: 'hello world!',
    counter: 0
  }),
  getters: {},
  actions: {}
});
