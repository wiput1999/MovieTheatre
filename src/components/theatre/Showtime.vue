<template>
  <div class="showtime">
    <div>
      <MovieCard :movie="showtime.movie"/>
    </div>
    <div>
      <h1>{{showtime.movie.title}}</h1>
      <div class="description">
        <h2>DIGITAL</h2>
        <div class="list">
          <router-link
            :to="`/seats/${showtime.movie.id}`"
            v-for="data in showtime.time"
            :key="data.id"
          >{{data}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.showtime {
  display: flex;
  width: 80vw;
  margin: 0 auto;
}

.list {
  display: flex;
  margin-top: 1em;
  flex-wrap: wrap;

  a {
    color: #fff;
    margin-top: 0.1em;
    padding: 0.3em 1.7em;
    border: #fff solid 2px;
    border-radius: 25px;
    font-size: 1.2em;
    margin-right: 1em;
    font-weight: 500;
  }
}

.description {
  padding-top: 1em;
  h2 {
    font-weight: 500;
  }
}
</style>

<script>
import MovieCard from '@/components/common/MovieCard.vue'

export default {
  props: ['showtime'],
  components: { MovieCard },
  computed: {
  }
}
</script>
