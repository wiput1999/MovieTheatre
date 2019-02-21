<template>
  <div class="row">
    <div class="box">
      <AutoComplete
        class="search-input"
        placeholder="MOVIE TITLE"
        type="key"
        :option="{loadData : movieList}"
        :show="movieTitle"
        v-model="movieTitle"
        @change="onMovieChange"
      />
      <AutoComplete
        class="search-input"
        placeholder="LOCATION"
        type="key"
        :option="{loadData : locationList}"
        :show="locationTitle"
        v-model="locationTitle"
        @change="onLocationChange"
      />
      <a class="button" :disabled="getSearchButton">SEARCH</a>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data: function () {
    return {
      movieTitle: '',
      movie: '',
      movieList: (filter, callback) => callback(this.$store.state.movies.filter((x) => (x.title.toLowerCase()).includes(filter.toLowerCase()))),
      locationTitle: '',
      location: '',
      locationList: (filter, callback) => callback([{ key: '1', title: 'dfgdfdzdgdg' }, { key: '2', title: 'dfgdfgdg' }].filter((x) => x.title.includes(filter)))
    }
  },
  computed: mapState({
    getSearchMovie: state => state.search.movie,
    getSearchLocation: state => state.search.location,
    getSearchButton: (state) => (state.search.movie === '' && state.search.location === '')
  }),
  methods: {
    onMovieChange (data, trigger) {
      if (data.value) {
        this.setSearchMovie(data.value.key)
        this.movie = data.value.title
      } else {
        this.movie = null
      }
    },
    onLocationChange (data, trigger) {
      if (data.value) {
        this.setSearchLocation(data.value.key)
        this.location = data.value.title
      } else {
        this.location = null
      }
    },
    ...mapMutations({
      setSearchMovie: 'SET_SEARCH_MOVIE',
      setSearchLocation: 'SET_SEARCH_LOCATION'
    })
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.box {
  display: inline-block;
  border-radius: 25px;
  background-color: #fff;
  padding: 1em 2em;
}

input {
  border: 0;
  border-bottom: rgb(112, 112, 112) solid 1px;
  outline: 0;
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 0 1em;
  text-align: center;
}

.button {
  color: rgb(112, 112, 112);
  padding: 0.3em 1.7em;
  border: rgb(112, 112, 112) solid 2px;
  border-radius: 25px;
}

.row {
  display: block;
  width: 100%;
  text-align: center;
}

.search-input {
  display: inline-block;
  margin: 0 1em;
}

@media (max-width: 400px) {
  .search-input {
    width: 80%;
    margin-bottom: 1em;
  }
}
</style>
