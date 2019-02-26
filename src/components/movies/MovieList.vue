<template>
  <v-wait for="movie.getItems">
    <template slot="waiting">
      <div class="loader">
        <div>
          <AtomSpinner :animation-duration="1000" :size="240" color="#fff"/>
        </div>
      </div>
    </template>
    <div class="movie-tab">
      <div @click="onChangeGenre('all')" v-bind:class="{ active: select === 'all' }">ALL</div>
      <div @click="onChangeGenre('action')" v-bind:class="{ active: select === 'action' }">ACTION</div>
      <div @click="onChangeGenre('scifi')" v-bind:class="{ active: select === 'scifi' }">SCI-FI</div>
      <div @click="onChangeGenre('drama')" v-bind:class="{ active: select === 'drama' }">DRAMA</div>
      <div @click="onChangeGenre('comedy')" v-bind:class="{ active: select === 'comedy' }">COMEDY</div>
    </div>
    <div class="movie-list">
      <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id"/>
    </div>
  </v-wait>
</template>

<script>
import { AtomSpinner } from 'epic-spinners'
import MovieCard from '@/components/common/MovieCard.vue'

export default {
  data: function () {
    return {
      select: 'all'
    }
  },
  computed: {
    movies () { return this.$store.state.movies }
  },
  methods: {
    onChangeGenre (genre) {
      this.select = genre
    }
  },
  components: {
    AtomSpinner,
    MovieCard
  }
}
</script>

<style lang="scss" scoped>
.loader {
  height: 30vh;
  display: grid;
  justify-content: center;
  align-items: center;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80vw;
  margin: 0 auto;
  padding-top: 3em;
  flex: 1;
}

.movie-tab {
  width: 80vw;
  padding-top: 1em;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-bottom: 2px #fff solid;

  div {
    padding: 1em;
    font-size: 1.2em;
    cursor: pointer;
  }
}

.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
