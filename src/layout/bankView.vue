<template>
  <div class='tw-p-[10px] tw-pr-[15px] tw-pt-[5px]'>
    <router-view v-slot='{ Component }' class='tw-bg-white tw-h-[100%] tw-p-[5px] tw-pt-[8px]'>
      <transition name='fade' mode='out-in'>
        <keep-alive :include='tabList' :exclude='exclude'>
          <component :is='Component' :key='routeName' v-if='keepAlive && tabList.includes(routeName)' />
        </keep-alive>
      </transition>
      <component :is='Component' v-if='!keepAlive && tabList.includes(routeName)' />
    </router-view>
  </div>
</template>

<script lang='ts'>
import { panesType, tabsStore } from '@/store/tabsStore';
import { storeToRefs } from 'pinia';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup () {
    const store = tabsStore();
    const route = useRoute();
    const { exclude, panes, tabList } = storeToRefs(store);
    const keepAlive = computed(() => route.meta.keepAlive as boolean);
    const routeName = computed(() => route.name as string);
    return {
      keepAlive,
      exclude,
      panes,
      tabList,
      routeName
    };
  }
});
</script>

<style lang='scss' scoped>
  /* 过度动画 */
  .fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
