import { defineStore } from 'pinia';
import { layoutConfig } from '@/layout/config';

export interface stateTypes {
  collapsed: boolean,
  selectedKeys: string[],
  openKeys: string[],
  preOpenKeys: string[],
  width: number
}

export const menuStore = defineStore({
  id: 'menuStore',
  state: (): stateTypes => ({
    collapsed: false,
    selectedKeys: [],
    openKeys: [],
    preOpenKeys: [],
    width: 0
  }),
  getters: {},
  actions: {
    setWidth (collapsed: boolean) {
      this.width = !this.collapsed ? layoutConfig.menu.maxWidth : layoutConfig.menu.minWidth;
    },
    setPreOpenKeys (preOpenKeys: string[]) {
      this.preOpenKeys = preOpenKeys;
    },
    toggleCollapsed () {
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    },
  }
});
