import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from "./router/index"
import "./tailwind.css";
import {createPinia} from 'pinia';

const pinia = createPinia()
createApp(App)
  .use(router)
  .use(pinia)
  .use(Antd)
  .mount('#app')
