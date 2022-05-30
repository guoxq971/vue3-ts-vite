import { defineStore } from 'pinia';
import { RouteLocationNormalized, useRoute } from 'vue-router';
import router, { metaInterface } from '@/router/index.ts';
import { message } from 'ant-design-vue';
import { useTool } from '@/utils/useTool/useTool.ts';

export type panesType = {
  title: string,
  key: string,
  closable: boolean,
};

export interface stateTypes {
  activeKey: string, // 当前激活的tabs
  panes: panesType[], // tabs
}

export const tabsStore = defineStore({
  id: 'tabsStore',
  state: (): stateTypes => ({
    activeKey: '',
    panes: [],
  }),
  getters: {},
  actions: {
    // 路由守卫
    routerBeforeEach (to: RouteLocationNormalized): void {
      const { path } = to;
      let { hasTab, addTabs } = this;
      if (hasTab(path)) {
        this.activeKey = path;
      } else {
        addTabs();
      }
    },
    // 判断当前tabs是否存在 ture=存在 false=不存在
    hasTab (key): boolean {
      let { panes } = this;
      return panes.some(item => item.key === key);
    },
    // 添加一个tabs
    addTabs (): void {
      let { panes } = this;
      const { meta, path } = router.currentRoute.value;
      const { title } = meta as metaInterface;
      this.activeKey = path;
      panes.push({
        title: title,
        key: path,
      });
    },
    // 关闭一个tabs
    removeTabs (key): void {
      if (this.panes.length === 1) {
        message.warning('这是最后一页，不能再关闭了');
        return;
      }
      if (this.hasTab(key)) {
        const index = this.panes.findIndex(item => item.key === key);
        if (key === this.activeKey) {
          this.activeKey = this.panes[index - 1].key;
        }
        this.panes.splice(index, 1);
      }
    },
    // 关闭其他
    removeOtherTabs (key = ''): void {
      key = useTool.isEmptyPlus(key) ? this.activeKey : key;
      if (this.hasTab(key)) {
        const index = this.panes.findIndex(item => item.key === key);
        this.panes = this.panes.filter((item, i) => i === index);
        this.activeKey = key;
      }
    },
  }
});
