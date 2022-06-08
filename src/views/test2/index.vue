<template>
  <div>
    axios测试 <br>
    <a-button @click="handlerClick">点击</a-button>
    <br>
    <a-table
      size="small"
      :scroll="{y:200}"
      bordered
      :dataSource="dataSource"
      :columns="columns"
      :pagination="false"
    >
      <template #bodyCell="{column}">
        <template v-if="column.dataIndex === 'cz'">
          <a-button type="link">测试</a-button>
          <a-button type="link">测试2</a-button>
          <a-button type="link">测试3</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from 'vue';
import { test, test2 } from '@/views/test2/pack/testService';
import { test2Interface } from './pack/test4service4interface';

export default defineComponent({
  setup () {
    const columns = [
      { align: 'center', title: '姓名', dataIndex: 'name' },
      { align: 'center', title: '创建时间', dataIndex: 'createTime' },
      { align: 'center', title: '更新时间', dataIndex: 'updateTime' },
      { align: 'center', title: '操作', dataIndex: 'cz' },
    ];
    let dataSource = ref<test2Interface[]>([]);
    const handlerClick = async () => {
      let res = await test2();
      if (res.code !== 0) return;
      dataSource.value = res.data;
      console.log(res);
    };
    return {
      handlerClick,
      dataSource,
      columns,
    };
  }
});

</script>

<style lang='scss' scoped>

</style>
