<template>
  <div class='tw-flex tw-flex-col tw-h-screen tw-max-w-screen'>
    <div class='tw-h-[48px] tw-bg-blue-d tw-flex tw-items-center'>
      <collapsedBtn />
    </div>
    <div class='tw-flex tw-flex-1'>
      <div :class="`tw-bg-[${menu.bgColor}]`" :style="`width:${width}px`">
        <AppMenu />
      </div>
      <div class='tw-flex-1 tw-h-full tw-overscroll-auto' :style='`min-width:calc(100vw - ${width}px)`'>
        <appTabs />
        <bankView />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import AppMenu from './appMenu/menuView.vue';
import appTabs from './appTabs/appTabs.vue';
import collapsedBtn from './appMenu/collapsedBtn.vue';
import bankView from './bankView.vue';
import { layoutConfig } from '@/layout/config.ts';
import { menuStore } from '@/store/menuStore.ts';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: {
    AppMenu,
    bankView,
    collapsedBtn,
    appTabs
  },
  setup () {
    const store = menuStore();
    const { width } = storeToRefs(store);
    const { menu } = layoutConfig;
    return {
      menu,
      width
    };
  }
});
</script>

<style lang='scss' scoped></style>
