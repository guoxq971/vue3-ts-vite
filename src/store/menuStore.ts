import { defineStore } from 'pinia';
import { layoutConfig } from '@/layout/config';

export interface stateTypes {
  collapsed: boolean, // 是否收起侧边栏
  selectedKeys: string[], // 当前选中的菜单
  openKeys: string[], // 当前展开的菜单
  preOpenKeys: string[], // 上一次展开的菜单
  width: number // 当前侧边栏宽度
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
