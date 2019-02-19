<template>
  <Banner></Banner>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/home/Banner.vue'
import store from '@/store'

export default {
  name: 'home',
  beforeMount () {
    store.dispatch('getBanners')
  },
  components: {
    Banner
  }
}
</script>
