<template>
  <div>
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="item in panes" :key="item.key" :tab="item.title" :closable="item.closable"/>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup () {
    // tabs
    const panes = ref<{ title: string; content: string; key: string; closable?: boolean }[]>(new Array(20).fill(null).map((_, index) => {
      const id = String(index + 1);
      return { title: `Tab ${id}`, content: `Content of Tab Pane ${id}`, key: id };
    }),);
    // 当前激活的tabs
    const activeKey = ref(panes.value[0].key);
    // 新增tabs的下标
    const newTabIndex = ref(0);
    // 新增tab
    const add = () => {
      activeKey.value = `newTab${newTabIndex.value++}`;
      panes.value.push({
        title: `New Tab ${activeKey.value}`,
        content: `Content of new Tab ${activeKey.value}`,
        key: activeKey.value,
      });
    };
    // 移除tab
    const remove = (targetKey: string) => {
      let lastIndex = 0;
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      panes.value = panes.value.filter(pane => pane.key !== targetKey);
      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey.value = panes.value[lastIndex].key;
        } else {
          activeKey.value = panes.value[0].key;
        }
      }
    };

    const onEdit = (targetKey: string) => {
      remove(targetKey);
    };

    return {
      panes,
      activeKey,
      onEdit,
      add,
    };
  },
});
</script>

