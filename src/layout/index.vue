<template>
  <a-button type="primary" @click="showModal">test</a-button>
  123
  <testModal ref="testModalRef"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import testModal from './testModal.vue';

export default defineComponent({
  components: {
    testModal
  },
  setup () {
    document.addEventListener('copy', (event) => {
      console.log('copy', event);
      let text: string | undefined = window.getSelection()?.toString();
      console.log('text', text);
      if (text){
        event.preventDefault();
        event.clipboardData?.setData('text/plain', text + '\r\n这是追加的版权内容');
      }
    });
    const testModalRef = ref<InstanceType<typeof testModal>>();
    const showModal = () => {
      console.log(testModal.value);
      testModalRef.value?.showModal();
    };
    return {
      showModal,
      testModalRef
    };
  }
});
</script>

<style lang="scss" scoped>

</style>
