import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/components/main-page/MainPage.vue";
import LogIn from "@/components/login/LogIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
  ]
})

export default router
