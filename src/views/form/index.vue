<template>
  <div>
    <a-form :model='formState' :label-col='labelCol' :wrapper-col='wrapperCol'>
      <a-form-item label='Activity name'>
        <a-input v-model:value='formState.name' />
      </a-form-item>
      <a-form-item label='Instant delivery'>
        <a-switch v-model:checked='formState.delivery' />
      </a-form-item>
      <a-form-item label='Activity type'>
        <a-checkbox-group v-model:value='formState.type'>
          <a-checkbox value='1' name='type'>Online</a-checkbox>
          <a-checkbox value='2' name='type'>Promotion</a-checkbox>
          <a-checkbox value='3' name='type'>Offline</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label='Resources'>
        <a-radio-group v-model:value='formState.resource'>
          <a-radio value='1'>Sponsor</a-radio>
          <a-radio value='2'>Venue</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label='Activity form'>
        <a-input v-model:value='formState.desc' type='textarea' />
      </a-form-item>
      <a-form-item :wrapper-col='{ span: 14, offset: 4 }'>
        <a-button type='primary' @click='onSubmit'>Create</a-button>
        <a-button style='margin-left: 10px'>Cancel</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue';
import { defineComponent, reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

export default {

  setup () {
      interface FormState {
        name: string;
        delivery: boolean;
        type: string[];
        resource: string;
        desc: string;
      }

      const formState: UnwrapRef<FormState> = reactive({
        name: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      });
      const onSubmit = () => {
        console.log('submit!', toRaw(formState));
      };
      return {
        labelCol: { style: { width: '150px' } },
        wrapperCol: { },
        formState,
        onSubmit
      };
  }
};
</script>

<style lang='scss' scoped>
</style>
