<template>
  <v-wait for="movie.getItems">
    <template slot="waiting">
      <div class="loader">
        <div>
          <AtomSpinner :animation-duration="1000" :size="240" color="#fff"/>
        </div>
      </div>
    </template>

    <Content/>
    <BottomBar current="movie"/>
  </v-wait>
</template>

<style lang="scss" scoped>
.loader {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import Content from '@/components/movies/Content.vue'
import BottomBar from '@/components/common/BottomBar.vue'
import { AtomSpinner } from 'epic-spinners'

import store from '@/store'

export default {
  name: 'movies',
  beforeMount () {
    store.dispatch('getMovies')
  },
  components: {
    AtomSpinner,
    Content,
    BottomBar
  }
}
</script>
