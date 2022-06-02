<template>
  <div>
    <!-- 右键菜单 -->
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="handlerOtherClick">关闭其他</v-contextmenu-item>
    </v-contextmenu>

    <div class="tabs-wrap">
      <div
        @click="handlerClick(item)"
        v-for="item in panes"
        :key="item.key"
        class="item-tabs"
        :class="{'action-color': item.key===activeKey}"
        v-contextmenu:contextmenu
        @contextmenu="handlerContextmenu(item.key)"
      >
      <redo-outlined
       class="icon-refreshe"
       v-if="item.key===activeKey"
       @click="handlerRefreshClick(item)"
       />
      <div>{{item.title}}</div>
      <close-outlined class="icon-close" @click.stop="handlerRemove(item.key)"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { panesType, tabsStore } from '@/store/tabsStore';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { ClockCircleOutlined, CloseOutlined,RedoOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    ClockCircleOutlined,
    CloseOutlined,
    RedoOutlined,
  },
  setup () {
    const store = tabsStore();
    const router = useRouter();
    const route = useRoute();
    const { activeKey, panes, } = storeToRefs(store);
    // tabs-点击跳转
    const handlerClick = (item: panesType) => router.push({ path: item.key });
    // tab-点击删除
    const handlerRemove = (key: string) => {
      const result = store.removeTabs(key);
      result && router.push({ path: store.activeKey });
    };
    // tab-点击刷新
    const handlerRefreshClick = (item:panesType) => {
      store.refreshPage(item);
    };
    // 右键-关闭其他
    const handlerOtherClick = () => {
      store.removeOtherTabs();
      router.push({ path: store.activeKey });
    };
    // 右键(设置当前右键点击的key)
    const handlerContextmenu = (key:string) => {
      store.setTempActiveKey(key);
    };
    return {
      panes,
      activeKey,
      handlerClick,
      handlerOtherClick,
      handlerContextmenu,
      handlerRemove,
      handlerRefreshClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.tabs-wrap {
  display: flex;

  .action-color{
    color:#13c2c2;
  }

  .item-tabs{
    border:1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    padding: 0 10px;
    font-size: 14px;
    margin-right: 7px;
    transition: all 0.3s;
    &:hover{
      cursor: pointer;
    }
    $num: 6px;
    .icon-refreshe{
      margin-right: $num;
    &:hover{
      color:#000;
    }
    }
    .icon-close{
      margin-left:  $num;
    &:hover{
      color:#000;
    }
    }
  }
}
</style>
