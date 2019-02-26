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
    <BottomBar current="seat"/>
  </v-wait>
</template>

<style lang="scss">
.loader {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import store from '@/store'

import { AtomSpinner } from 'epic-spinners'

import BottomBar from '@/components/common/BottomBar.vue'
import Content from '@/components/seatmap/Content.vue'

export default {
  props: ['id'],
  name: 'seatselect',
  beforeMount () {
    store.dispatch('getMovie', this.id)
    store.dispatch('getMovies')
    store.dispatch('getLocations')
  },
  components: {
    AtomSpinner,
    BottomBar,
    Content
  }
}
</script>
