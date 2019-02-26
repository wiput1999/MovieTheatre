<template>
  <div>
    <Banner/>
    <Content/>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/home/Banner.vue'
import Content from '@/components/home/Content.vue'
import store from '@/store'

export default {
  name: 'home',
  beforeMount () {
    store.dispatch('getBanners')
    store.dispatch('getMovies')
    store.dispatch('getLocations')
  },
  components: {
    Banner,
    Content
  }
}
</script>
