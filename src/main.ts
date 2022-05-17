import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "./tailwind.css";
import { createPinia } from 'pinia';
import router from "./router/index";
import { createApp } from 'vue';
import App from './App.vue';

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(Antd)
  .mount('#app');
