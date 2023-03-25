import vueJsx from '@vitejs/plugin-vue-jsx'; // Loading是以render函数的形式渲染的，所以需要使用jsx插件支持
import DefineOptions from 'unplugin-vue-define-options/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), DefineOptions()]
});
