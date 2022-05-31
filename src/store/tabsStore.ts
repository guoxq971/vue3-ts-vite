import { defineStore } from 'pinia';
import { RouteLocationNormalized, useRoute } from 'vue-router';
import router, { metaInterface } from '@/router/index.js';
import { message } from 'ant-design-vue';
import { useTool } from '@/utils/useTool/useTool.js';

export type panesType = {
  title: string
  key: string
}

export interface stateTypes {
  activeKey: string // 当前激活的tabs
  panes: panesType[] // tabs
  tempActiveKey: string //右键激活菜单使用到的临时key
}

export const tabsStore = defineStore({
  id: 'tabsStore',
  state: (): stateTypes => ({
    tempActiveKey: '',
    activeKey: '',
    panes: []
  }),
  getters: {},
  actions: {
    /**
     * 设置临时key
     * @param key 路径
     */
    setTempActiveKey (key:string) {
      this.tempActiveKey = key;
    },
    // 路由守卫
    routerBeforeEach (to: RouteLocationNormalized): void {
      if (this.hasTab(to.path)) {
        this.activeKey = to.path;
      } else {
        this.addTabs(to.path, to.meta.title as string);
      }
    },
    // 判断当前tabs是否存在 ture=存在 false=不存在
    hasTab (key:string): boolean {
      return this.panes.some((item) => item.key === key);
    },
    /**
     *  添加一个tabs
     * @param path 路径
     * @param title 标题
     */
    addTabs (path:string, title:string): void {
      this.activeKey = path;
      this.panes.push({ title: title, key: path });
    },
    // 关闭一个tabs
    removeTabs (key: string): boolean {
      if (this.panes.length === 1) {
        message.warning('这是最后一页，不能再关闭了');
        return false;
      }
      const result = this.hasTab(key);
      if (!result){
        message.warning('关闭了一个不存在的tabs');
        return false;
      }
      const index = this.panes.findIndex((item) => item.key === key);
      if (index === -1) {
        message.warning('关闭了一个不存在的tabs');
        return false;
      }
      // 要关闭的tabs是否不是当前激活的tabs, 直接关闭
      if (this.activeKey !== this.panes[index].key) {
        this.panes.splice(index, 1);
        return true;
      }
      // 如果是第一个tabs, 则激活第二个tabs
      if (index === 0) {
        this.activeKey = this.panes[index + 1].key;
      } else {
        this.activeKey = this.panes[index - 1].key;
      }
      this.panes.splice(index, 1);
      return true;
    },
    // 关闭其他
    removeOtherTabs (): void {
      if (useTool.isEmptyPlus(this.tempActiveKey)){
        message.warning('参数错误！');
        return;
      }
      const index = this.panes.findIndex((item) => item.key === this.tempActiveKey);
      this.panes = this.panes.filter((item, i) => i === index);
      this.activeKey = this.tempActiveKey;
    }
  }
});
