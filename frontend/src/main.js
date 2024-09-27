import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/_styles.scss'
import MainHeader from '@/components/main-page/header/MainHeader.vue'
import './assets/scss/global.scss'

loadFonts()

const app = createApp(App).use(router).use(vuetify);
app.mount('#app');
app.component('MainHeader', MainHeader);
