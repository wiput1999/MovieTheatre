<template>
  <div class="row">
    <div class="box">
      <AutoComplete
        class="search-input"
        placeholder="MOVIE TITLE"
        :option="{loadData : movieList, key: 'id'}"
        :show="movieTitle"
        v-model="movieTitle"
        @change="onMovieChange"
      />
      <AutoComplete
        class="search-input"
        placeholder="LOCATION"
        type="key"
        :option="{loadData : locationList, key: 'id'}"
        :show="locationTitle"
        v-model="locationTitle"
        @change="onLocationChange"
      />
      <router-link
        :to="`/theatre/${this.location}`"
        class="button"
        @click.native="onClickSearch"
      >SEARCH</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data: function () {
    return {
      movieTitle: this.$store.state.search.movieTitle,
      movie: this.$store.state.search.movie,
      movieList: (filter, callback) => callback(this.$store.state.movies.filter((x) => (x.title.toLowerCase()).includes(filter.toLowerCase()))),
      locationTitle: this.$store.state.search.locationTitle,
      location: this.$store.state.search.location,
      locationList: (filter, callback) => callback(this.$store.state.locations.filter((x) => (x.title.toLowerCase()).includes(filter.toLowerCase())))
    }
  },
  computed: mapState({
    getSearchMovie: state => state.search.movie,
    getSearchLocation: state => state.search.location,
    getSearchButton: (state) => (state.search.location === '')
  }),
  methods: {
    onMovieChange (data, trigger) {
      if (data.value) {
        this.setSearchMovie(data.value.id)
        this.setSearchMovieTitle(data.value.title)

        this.movieTitle = data.value.title
        this.movie = data.value.id
      } else {
        this.movieTitle = null
      }
    },
    onLocationChange (data, trigger) {
      if (data.value) {
        this.setSearchLocation(data.value.id)
        this.setSearchLocationTitle(data.value.title)

        this.locationTitle = data.value.title
        this.location = data.value.id
      } else {
        this.locationTitle = null
      }
    },
    onClickSearch (e) {
      console.log(this.location)
      if (this.location === '') {
        e.preventDefault()
      } else {
        this.$router.push({ name: 'theatre', params: { id: this.location } })
      }
    },
    ...mapMutations({
      setSearchMovie: 'SET_SEARCH_MOVIE',
      setSearchMovieTitle: 'SET_SEARCH_MOVIE_TITLE',
      setSearchLocation: 'SET_SEARCH_LOCATION',
      setSearchLocationTitle: 'SET_SEARCH_LOCATION_TITLE'
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
