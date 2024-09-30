<template>
  <div class="wrapper">
    <header>
      <nav class="flex space-between">
          <span class="header_logo">U-Helper</span>
          <ul class="nav_list inline_flex">
            <li><router-link to='/home' class="nav_link">Home</router-link></li>
            <li><router-link to="subject" class="nav_link">Subject</router-link></li>
            <li><router-link to="contact" class="nav_link">Contact</router-link></li>
            <li><router-link to='/login' class="nav_link">Login</router-link></li>
            <v-btn
              class="nav_link--is-signup"
              text="Sign Up"
              text-color="white"
              size="large"
              @click="openLoginDialog"
            />
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  setup() {
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
.nav_link--is-signup {
  color: $main-text-color  !important;
}
</style>
