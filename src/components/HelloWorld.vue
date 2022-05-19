<template>
  test
  <button @click="handleClick">修改状态数据</button>
  <!-- 模板内不需要加.value -->
  <p class="text-red-">{{ store.counter }}</p>
  <!-- 或者使用解构之后的 -->
  <p>{{ counter }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import { mainStore } from '../store';
import { storeToRefs } from 'pinia';

export default defineComponent({
  setup () {
    // 实例化仓库
    const store = mainStore();
    // 解构并使数据具有响应式
    const { counter } = storeToRefs(store);

    // 点击 + 1;
    function handleClick () {
      // ref数据这里需要加.value访问
      counter.value++;
    }

    return {
      handleClick,
      counter,
      store,
    };
  }
});
</script>
