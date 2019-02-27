<template>
  <v-wait for="movie.getShowtimes">
    <template slot="waiting">
      <div class="loader">
        <div>
          <AtomSpinner :animation-duration="1000" :size="240" color="#fff"/>
        </div>
      </div>
    </template>
    <Content/>
    <BottomBar current="time"/>
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
import store from '@/store'

import { AtomSpinner } from 'epic-spinners'

import Content from '@/components/theatres/Content.vue'
import BottomBar from '@/components/common/BottomBar.vue'

export default {
  name: 'theatres',
  beforeMount () {
    store.dispatch('getAllShowtimes')
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
