<template>
  <Carousel
    :perPage="1"
    :paginationEnabled="false"
    :autoplay="true"
    :autoplayTimeout="2000"
    :loop="true"
  >
    <Slide class="banner"></Slide>
    <Slide class="banner"></Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 100vh;
  background: url("https://wallpapercave.com/wp/wp3154692.jpg") center;
  background-size: cover;
}
</style>
