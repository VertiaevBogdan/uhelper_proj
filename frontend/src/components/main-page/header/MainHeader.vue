<template>
  <div class="wrapper">
    <header>
      <nav class="flex space-between">
          <span class="header_logo">U-Helper</span>
          <ul class="nav_list inline_flex">
            <li><a href="#" class="nav_link">Home</a></li>
            <li><a href="#" class="nav_link">Subject</a></li>
            <li><a href="#" class="nav_link">Contact</a></li>
            <li><a href="#" class="nav_link">Login</a></li>
            <v-btn
              class="nav_link--is-signup"
              text="Sign Up"
              text-color="white"
              size="large"
              @click="openLoginDialog"
            />
        </ul>
        <LogIn
          v-if="showLogInDialog"
          @close="closeLoginDialog"
        />
      </nav>
    </header>
  </div>
</template>

<script>
import LogIn from "@/components/main-page/login/LogIn.vue";
import { ref } from "vue";

export default {
  components: {
    LogIn
  },
  setup() {
    const showLogInDialog = ref(false);

    const openLoginDialog = () => {
      showLogInDialog.value = true;
    }

    const closeLoginDialog = () => {
      showLogInDialog.value = false;
    }

    return {
      showLogInDialog,
      openLoginDialog,
      closeLoginDialog
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
.nav_link--is-signup {
  color: $main-text-color  !important;
}
</style>
