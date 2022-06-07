import './tailwind.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import { createPinia } from 'pinia';
import router from './router/index.js';

import { createApp } from 'vue';
import App from './App.vue';

import contextmenu from 'v-contextmenu';
import 'v-contextmenu/dist/themes/default.css';

import { Request } from '@/utils/request/request';
import VueAxios from 'vue-axios';

const vueApp = createApp(App);
const pinia = createPinia();

vueApp
  .use(router)
  .use(pinia)
  .use(Antd)
  .use(VueAxios, Request.init())
  .use(contextmenu);

router.isReady().then(()=>vueApp.mount('#app'));
