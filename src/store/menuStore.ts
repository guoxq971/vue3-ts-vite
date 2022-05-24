import { defineStore } from 'pinia';

export interface stateTypes {
  collapsed: boolean,
  selectedKeys: string[],
  openKeys: string[],
  preOpenKeys: string[],
}

export const menuStore = defineStore({
  id: 'menuStore',
  state: (): stateTypes => ({
    collapsed: false,
    selectedKeys: ['1'],
    openKeys: ['sub1'],
    preOpenKeys: ['sub1'],
  }),
  getters: {},
  actions: {
    setPreOpenKeys (preOpenKeys: string[]) {
      this.preOpenKeys = preOpenKeys;
    },
    toggleCollapsed () {
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    },
  }
});
