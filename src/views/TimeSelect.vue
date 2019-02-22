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

import Content from '@/components/theatre/Content.vue'
import BottomBar from '@/components/common/BottomBar.vue'

export default {
  props: ['id'],
  name: 'timeselect',
  beforeMount () {
    store.dispatch('getShowtimes', this.id)
    store.dispatch('getMovies')
  },
  components: {
    AtomSpinner,
    BottomBar,
    Content
  }
}
</script>
