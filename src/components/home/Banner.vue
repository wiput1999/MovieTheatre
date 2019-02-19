<template>
  <Carousel
    :perPage="1"
    :paginationEnabled="false"
    :autoplay="true"
    :autoplayTimeout="2000"
    :loop="true"
  >
    <Slide class="banner" v-for="b in banners" :key="b.id" :style="b"></Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  data: function () {
    return {
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners.map(b => 'background-image: url("' + b.url + '");')
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 100vh;
  background-size: cover;
  background-position: center top;
}
</style>
