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
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  setup() {

  },
}
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
.nav_link--is-signup {
  color: $main-text-color  !important;
}
</style>
