import { ref } from 'vue';
<template>
  <div>
    pageNum: {{pageNum}} <br>
    pageSize: {{pageSize}} <br>
    total: <a-input v-model:value="total" /> <br>
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
    <a-pagination
      v-model:current="pageNum"
      v-model:pageSize="pageSize"
      show-quick-jumper
      v-model:total="total"
      :pageSizeOptions="['10', '20', '30', '40']"
      @change="onChange"
    >
      <template #buildOptionText="props">
        <span>{{ props.value }}条/页</span>
      </template>
    </a-pagination>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'table',
  setup () {
    // 表格数据
    let dataSource = [];
    // 表格分页-当前页
    const pageNum = ref<number>(1);
    // 表格分页-每页条数
    const pageSize = ref<number>(20);
    // 表格-总条数
    const total = ref<number>(500);
    // 表格分页-事件
    const onChange = () => {
      console.log('点击分页页码和大小都会触发这个');
    };
    for (let i = 0; i < 100; i++) {
      dataSource.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    return {
      pageNum,
      pageSize,
      total,
      onChange,
      dataSource,
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          align: 'center',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          align: 'center'
        },
        {
          title: '住址',
          dataIndex: 'address',
          align: 'center'
        },
        {
          title: '操作',
          dataIndex: 'cz',
          align: 'center'
        },
      ],
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
