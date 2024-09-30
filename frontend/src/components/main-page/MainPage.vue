<template>
  <MainHeader/>
  <MainAbout/>
  <MainPreview/>
  <MainContact/>
</template>

<script>
import MainHeader from '@/components/main-page/header/MainHeader.vue'
import MainAbout from '@/components/main-page/about/MainAbout.vue'
import MainPreview from '@/components/main-page/education-preview/MainPreview.vue'
import MainContact from '@/components/main-page/contact/MainContact.vue'


export default {
  components: {
    MainHeader,
    MainAbout,
    MainPreview,
    MainContact,
  },
  setup() {
    return {};
  }
}
</script>

