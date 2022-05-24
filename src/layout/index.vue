<template>
  <div class=" tw-flex tw-flex-col tw-h-screen">
    <div class="tw-h-[48px] tw-bg-blue-d tw-flex tw-items-center">
      <collapsedBtn/>
    </div>
    <div class="tw-flex tw-flex-1">
      <div class="tw-max-w-[256px] tw-min-w-[64px]">
        <AppMenu/>
      </div>
      <div class="tw-flex-1 tw-h-full">
        <div class="tw-h-full">
          显示区域
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppMenu from './appMenu/menuView.vue';
import collapsedBtn from './appMenu/collapsedBtn.vue';

export default defineComponent({
  components: {
    AppMenu,
    collapsedBtn,
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>

</style>
