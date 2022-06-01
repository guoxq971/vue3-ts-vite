<template>
  <div class="tw-text-red-500">
    这里是测试页面
    <a-input></a-input>
    <div>
      编译器问题:
        1. 格式化的时候没有格式化template
      项目问题:
        1. 左侧侧边栏伸缩会把顶部的高度改变
        2. 右侧显示区域应为滚动区域 或者 顶部是粘性的
    </div>
    <div>
      常规: 表格、表单、输入框、下拉框、弹窗、按钮
    </div>
    <div>
      特殊: tree、地图、three、echarts、canvas
    </div>
    <div>
      配置: 皮肤、工具js、axios、vite
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: 'test',
  setup () {

  }
};
</script>

<style lang="scss" scoped>
</style>
