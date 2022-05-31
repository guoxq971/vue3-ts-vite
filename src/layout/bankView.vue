<template>
  <div>
    panes: {{panes}} <br>
    exclude: {{exclude}} <br>
    refreshing: {{refreshing}} <br>
    <router-view v-slot="{Component}">
        {{log(Component)}}
      <transition name="fade" mode="out-in">
        <keep-alive :exclude="exclude">
          <component
            :is="Component"
            v-if="keepAlive && !refreshing"
            :key="$route.path"
          />
        </keep-alive>
      </transition>
      <component
        :is="Component"
        v-if="!keepAlive"
        :key="$route.path"
      />
    </router-view>
  </div>
</template>

<script lang="ts">
import { tabsStore } from '@/store/tabsStore.js';
import { storeToRefs } from 'pinia';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup () {
    const store = tabsStore();
    const route = useRoute();
    const { exclude,refreshing, panes } = storeToRefs(store);
    const keepAlive = computed(() => route.meta.keepAlive as boolean);
    const log = (res) => console.log(res);
    return {
      keepAlive,
      exclude,
      panes,
      log,
      refreshing,
    };
  }
});
</script>

<style lang="scss" scoped>
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
