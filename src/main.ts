import './tailwind.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { createPinia } from 'pinia';
import router from './router/index.js';
import { createApp } from 'vue';
import App from './App.vue';

import contextmenu from 'v-contextmenu';
import 'v-contextmenu/dist/themes/default.css';

const vueApp = createApp(App);
const pinia = createPinia();

vueApp
  .use(router)
  .use(pinia)
  .use(Antd)
  .use(contextmenu);

router.isReady().then(()=>vueApp.mount('#app'));
