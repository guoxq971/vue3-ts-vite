<template>
  <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="handlerClick"
    >
      <a-menu-item key="/home">
        <template #icon>
          <PieChartOutlined/>
        </template>
        <span>首页</span>
      </a-menu-item>
      <a-menu-item key="/test">
        <template #icon>
          <DesktopOutlined/>
        </template>
        <span>测试</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <InboxOutlined/>
        </template>
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <MailOutlined/>
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined/>
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, watch } from 'vue';
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import { menuStore } from '@/store/menuStore';
import { storeToRefs } from 'pinia';
import { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  setup () {
    const store = menuStore();
    const router = useRouter();
    let {
      collapsed,
      openKeys,
      selectedKeys,
      preOpenKeys,
    } = storeToRefs(store);
    const handlerClick: MenuProps['onClick'] = ({ item, key, keyPath }) => {
      // console.log({ item, key, keyPath });
      router.push({ path: key + '' });
    };

    return {
      collapsed,
      openKeys,
      selectedKeys,
      preOpenKeys,
      handlerClick,
    };
  },
});
</script>

