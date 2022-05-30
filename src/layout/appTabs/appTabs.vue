<template>
  <div>
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="handlerOtherClick">关闭其他</v-contextmenu-item>
    </v-contextmenu>

    <a-tabs
      v-model:activeKey="activeKey"
      hide-add
      type="editable-card"
      v-contextmenu:contextmenu
    >
      <a-tab-pane
        v-for="pane in panes"
        :key="pane.key"
        :tab="pane.title"
      />
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { panesType, tabsStore } from '@/store/tabsStore.ts';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { ClockCircleOutlined, CloseOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    ClockCircleOutlined,
    CloseOutlined,
  },
  setup () {
    const store = tabsStore();
    const router = useRouter();
    const {
      activeKey,
      panes,
    } = storeToRefs(store);
    const handlerClick = (item: panesType) => {
      router.push({ path: item.key });
    };
    const contextmenu = (e: HTMLDetailsElement) => {
      console.log('contextmenu');
    };
    // 移除tab
    const remove = (key: string) => {
      store.removeTabs(key);
    };
    // 关闭其他
    const handlerOtherClick = () => {
      store.removeOtherTabs();
    };
    return {
      add: store.addTabs,
      panes,
      activeKey,
      contextmenu,
      handlerClick,
      handlerOtherClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon-close {

}
</style>
