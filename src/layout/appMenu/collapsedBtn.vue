<template>
  <a-button type="primary" @click="toggleCollapsed" class="tw-bg-[#001529]">
    <MenuUnfoldOutlined v-if="collapsed"/>
    <MenuFoldOutlined v-else/>
  </a-button>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { menuStore } from '@/store/menuStore.ts';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup () {
    const store = menuStore();
    let {
      collapsed,
      openKeys,
    } = storeToRefs(store);

    watch(() => openKeys.value, (_val, oldVal) => {
      store.setWidth(_val);
      store.setPreOpenKeys(oldVal);
    }, { immediate: true });
    return {
      collapsed,
      toggleCollapsed: () => store.toggleCollapsed(),
    };
  }
});
</script>

<style lang="scss" scoped>

</style>
