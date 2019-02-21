<template>
  <div class="background">
    <div class="content">
      <div class="container">
        <Search/>
        <MovieList/>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Search.vue'
import MovieList from './MovieList'

export default {
  data: function () {
    return {

    }
  },
  computed: {
  },
  components: {
    Search,
    MovieList
  }
}
</script>

<style lang="scss" scoped>
.loader {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}

.background {
  width: 100%;
  background-image: url("/assets/home/background.jpg");
  background-size: cover;
  background-position: center;
}

.content {
  width: 100%;
  margin-bottom: 6em;
  background: rgba(63, 63, 63, 0.8);
}

.container {
  width: 80vw;
  margin: 0 auto;
  padding: 3em 0;
}

@supports (
  (-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))
) {
  .content {
    background: rgba(0, 0, 0, 0.5);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
}
</style>
