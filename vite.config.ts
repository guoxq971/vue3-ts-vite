import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

console.log('__dirname',__dirname);
export default defineConfig({
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()]
});
