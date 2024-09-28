<template>
  <div class="wrapper">
    <section class="">
      <div class="preview-title mb-4-em">
        <h3 class="mb-1-em">Lorem ipsum.</h3>
        <h2 class="mb-1-em">Education Preview</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum eum iste iure minima non omnis praesentium tenetur veritatis voluptatum.</p>
      </div>
      <div class="flex justify-center">
        <article v-for="card in previewCards" :key="card.id" class="preview-card mr-1-em">
        <img :src="card.image" alt="" class="preview-img">
        <div class="card-description">
          <h4 class="h-expressive mb-1-em">Well cum...</h4>
          <h3 class="secondary-card-title h-dark mb-1-em">Lorem ipsum.</h3>
          <p class="card-text mb-1-em">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum facilis fugiat magni, ullam!</p>
          <v-btn
            text="Show More"
            size="big"
            variant="outlined"
            min-width="2em"
            min-height="2em"
            append-icon="mdi-arrow-right"
            v-bind:style="{ padding: '.5em' , color: '#8D5CF6' }"
          />
        </div>
      </article>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const previewCards = ref([
    { id: 1, image: new URL('@/public/preview/card_1.png', import.meta.url).href },
    { id: 2, image: new URL('@/public/preview/card_2.png', import.meta.url).href },
    { id: 3, image: new URL('@/public/preview/card_2.png', import.meta.url).href },
  ]);
    return {
      previewCards
    }
  }
}
</script>
