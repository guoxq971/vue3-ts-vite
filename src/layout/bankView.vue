<template>
  <div>
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component" v-if="keepAlive"/>
      </keep-alive>
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

</style>
