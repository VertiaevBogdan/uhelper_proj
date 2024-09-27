<template>
  <div class="wrapper">
      <section class="write-to-us">
        <div class="preview-title mb-4-em">
          <h2 class="mb-1-em">Write To Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum eum iste iure minima non omnis praesentium tenetur veritatis voluptatum.</p>
        </div>
        <form action="" class="write-to-us-form">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="name"
                label="Name"
                :rules="nameRules"
                bg-color="white"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="email"
                label="Email"
                :rules="emailRules"
                bg-color="white"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                v-model="message"
                label="Message"
                bg-color="white"
                outlined
                dense
                required
              ></v-textarea>
            </v-col>
          </v-row>
          <v-btn
            class="nav_link--is-signup "
            @click="submitForm"
            text="Send Message"
            size="large"
          />
        </form>
      </section>
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
.nav_link {
  color: $main-text-color;
  border-color: $primary-color;
}
</style>
