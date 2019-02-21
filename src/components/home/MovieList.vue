<template>
  <div>
    <div class="movie-tab">
      <div>NOW PLAYING</div>
      <div>COMMING SOON</div>
    </div>
    <div class="movie-list">
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
    </div>
    <div class="row">
      <a class="button">MORE</a>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'

export default {
  data: function () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  components: {
    MovieCard
  }
}
</script>

<style lang="scss" scoped>
.movie-list {
  width: 80vw;
  margin: 0 auto;
  padding-top: 3em;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
  }

  div:hover {
    font-weight: bold;
    text-decoration: underline;
  }
}

.row {
  margin-top: 1em;
  display: block;
  width: 100%;
  text-align: center;
}

.button {
  background-color: #fff;
  padding: 1em 3em;
  color: #000;
  border-radius: 25px;
}
</style>
