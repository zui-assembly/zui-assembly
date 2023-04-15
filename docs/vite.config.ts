// import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; // Loading是以render函数的形式渲染的，所以需要使用jsx插件支持
import DefineOptions from 'unplugin-vue-define-options/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), DefineOptions()]
  // build: {
  //   lib: {
  //     entry: '',
  //     name: '@{projectName}',
  //     fileName: '@{projectName}'
  //   },
  //   rollupOptions: {
  //     // 确保外部化处理那些你的库中不需要的依赖
  //     external: ['vue'],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         vue: 'Vue'
  //       }
  //     }
  //   }
  // }
});
