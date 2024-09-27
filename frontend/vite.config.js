import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "@/assets/scss/global.scss";'
  //     }
  //   }
  // },
  plugins: [
    vue(),
    vuetify(
      { autoImport: true },
      { styles: 'src/assets/scss/global.scss' }
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
