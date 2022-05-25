import { defineStore } from 'pinia';

export interface stateTypes {
  liveList: string[], // 当前激活的tabs
}

export const tabsStore = defineStore({
  id: 'tabsStore',
  state: (): stateTypes => ({
    liveList: [],
  }),
  getters: {},
  actions: {}
});
