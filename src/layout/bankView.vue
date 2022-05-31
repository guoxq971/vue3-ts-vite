<template>
  <div>
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" v-if="keepAlive"/>
        </keep-alive>
      </transition>
      <component :is="Component" v-if="!keepAlive"/>
    </router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup () {
    const route = useRoute();
    const keepAlive = computed(() => route.meta.keepAlive as boolean);
    return {
      keepAlive,
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
