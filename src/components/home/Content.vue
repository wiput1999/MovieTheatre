<template>
  <div class="background">
    <div class="content">
      <div class="container">
        <Search/>
        <MovieList/>
        <div class="row">
          <router-link to="/movies" class="button">MORE</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/common/Search.vue'
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
  background: linear-gradient(
    to right,
    #2e8bce,
    #3593d4,
    #3b9adb,
    #42a2e1,
    #49aae7,
    #48a1de,
    #4798d5,
    #468fcc,
    #3e74b1,
    #375a96,
    #2f427a,
    #272a5f
  );
}

.content {
  width: 100%;
  margin-bottom: 3em;
  background: rgba(63, 63, 63, 0.8);
}

.container {
  width: 80vw;
  margin: 0 auto;
  padding: 3em 0;
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
