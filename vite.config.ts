import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const path = require('path');

console.log('__dirname', __dirname);
export default defineConfig({
  server: {
    https: false, // 是否开启 https
    open: false, // 是否自动在浏览器打开
    // host: '0.0.0.0',
    port: 4040,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3030/',
        changeOrigin: true, //是否跨域
        ws: false, //是否代理 websockets
        secure: false, //是否https接口
        // pathRewrite: { //路径重置
        //   '^/api': ''
        // }
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()]
});
