<template>
  <div>
    <a-menu
      v-model:openKeys='openKeys'
      v-model:selectedKeys='selectedKeys'
      mode='inline'
      theme='dark'
      :inline-collapsed='collapsed'
      @click='handlerClick'
    >
<!--      <template v-for='{name,path,meta} in routes' :key='name'>-->
<!--        <a-menu-item>-->
<!--          <template #icon>-->
<!--            <PieChartOutlined />-->
<!--          </template>-->
<!--          <span>{{ meta.title }}</span>-->
<!--        </a-menu-item>-->
<!--      </template>-->

      <a-menu-item key='/home'>
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>首页</span>
      </a-menu-item>
      <a-menu-item key='/test'>
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>测试</span>
      </a-menu-item>
      <a-menu-item key='/qtable'>
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>表格</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, watch } from 'vue';
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';
import { menuStore } from '@/store/menuStore';
import { storeToRefs } from 'pinia';
import { MenuProps } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';
import { routersInterface, routes as routes2 } from '@/router';

export default defineComponent({
  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined
  },
  setup () {
    const store = menuStore();
    const router = useRouter();
    const route = useRoute();
    const { setSelectKeys } = store;
    let {
      collapsed,
      openKeys,
      selectedKeys,
      preOpenKeys
    } = storeToRefs(store);
    // 监听路由，设置选中的菜单
    watch(() => route.path, (_val) => setSelectKeys([_val]), { immediate: true });
    // 菜单的点击
    const handlerClick: MenuProps['onClick'] = (item) => {
      console.log('item',item);
      let _key = String(item.key);
      router.push({ path: _key });
      setSelectKeys([_key]);
    };
    const routes = ref<routersInterface[]>(routes2);
    return {
      collapsed,
      openKeys,
      selectedKeys,
      preOpenKeys,
      handlerClick,
      routes
    };
  }
});
</script>

