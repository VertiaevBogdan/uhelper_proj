<template>
  <router-view></router-view>
</template>

<script>
import MainPage from '@/components/main-page/MainPage.vue'
import LogIn from "@/components/login/LogIn.vue";
export default {
  name: 'App',
  components: {
    MainPage,
    LogIn,

  }
}
</script>
