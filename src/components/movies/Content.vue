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
import Search from '@/components/common/Search.vue'
import MovieList from './MovieList.vue'

export default {
  data: function () {
    return {

    }
  },
  beforeMount () {
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
.background {
  width: 100%;
  background-image: url("/assets/home/background.jpg");
  background-size: cover;
  background-position: center;
}

.content {
  width: 100%;
  margin-bottom: 3em;
  background: rgba(34, 34, 34, 0.8);
}

.container {
  width: 80vw;
  margin: 0 auto;
  padding: 100px 0;
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
