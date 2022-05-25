import { defineStore } from 'pinia';
import { layoutConfig } from '@/layout/config.ts';

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
    // 设置激活菜单
    setSelectKeys (selectedKeys: string[]) {
      this.selectedKeys = selectedKeys;
    },
    // 菜单展开状态后对应的菜单宽度
    setWidth (collapsed: boolean) {
      this.width = !this.collapsed ? layoutConfig.menu.maxWidth : layoutConfig.menu.minWidth;
    },
    // 设置菜单收缩状态
    setPreOpenKeys (preOpenKeys: string[]) {
      this.preOpenKeys = preOpenKeys;
    },
    // 设置菜单展开状态
    toggleCollapsed () {
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    },
  }
});
