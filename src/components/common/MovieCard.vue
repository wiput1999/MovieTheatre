<template>
  <div class="movie-card">
    <img :src="movie.image">
  </div>
</template>

<script>

export default {
  props: ['movie'],
  data: function () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.movie-card {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 7px 28px rgba(0, 0, 0, 0.12);
  border-radius: 37px;
  width: 80%;
  max-width: 250px;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 3em;
  background-size: cover;

  img {
    border-radius: 37px;
    width: 100%;
    height: auto;
  }
}

.movie-text {
  color: #000;

  img {
    width: 100%;
    height: auto;
  }
}
</style>
