<template>
  <div class="banner-wrapper">
    <v-wait for="banner.getItems">
      <template slot="waiting">
        <div class="loader" :v-show="loading">
          <div>
            <AtomSpinner :animation-duration="1000" :size="240" color="#fff"/>
          </div>
        </div>
      </template>
      <Carousel
        :perPage="1"
        :paginationEnabled="false"
        :autoplay="true"
        :autoplayTimeout="2000"
        :loop="true"
        :v-if="banners"
      >
        <Slide class="banner" v-for="b in banners" :key="b.id" :style="b"></Slide>
      </Carousel>
    </v-wait>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { AtomSpinner } from 'epic-spinners'

export default {
  data: function () {
    return {
      loading: false
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners.map(b => 'background-image: url("' + b.url + '");')
    }
  },
  components: {
    Carousel,
    Slide,
    AtomSpinner

  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 80vh;
  background-size: cover;
  background-position: center top;
}

.banner-wrapper {
  height: 80vh;
}

.loader {
  height: 80vh;
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
