import Vue from 'vue'
import Vuex from 'vuex'
import VueWait from 'vue-wait'

import { db, storage } from './main'

Vue.use(Vuex)
Vue.use(VueWait)

export default new Vuex.Store({
  state: {
    banners: [],
    movies: [],
    showtimes: [],
    locations: [],
    search: {
      movie: '',
      location: ''
    }
  },
  mutations: {
    GET_BANNER (state, payload) {
      state.banners = payload
    },
    SET_SEARCH_MOVIE (state, payload) {
      state.search.movie = payload
    },
    SET_SEARCH_LOCATION (state, payload) {
      state.search.location = payload
    },
    GET_MOVIE (state, payload) {
      state.movies = payload
    },
    GET_SHOWTIMES (state, payload) {
      state.showtimes = payload
    },
    GET_LOCATIONS (state, payload) {
      state.locations = payload
    }
  },
  actions: {
    async getBanners ({ commit, dispatch }) {
      dispatch('wait/start', 'banner.getItems')

      let banners = []
      let querySnapshot = await db.collection('banners').get()

      querySnapshot.forEach(async doc => {
        let url = await storage
          .ref('banner/' + doc.data().filename)
          .getDownloadURL()
        banners.push({ id: doc.id, url })
      })

      commit('GET_BANNER', banners)
      dispatch('wait/end', 'banner.getItems')
    },
    async getLocations ({ commit, dispatch }) {
      dispatch('wait/start', 'locations.getItems')

      let movies = []
      let querySnapshot = await db.collection('theatres').get()

      querySnapshot.forEach(async doc => {
        movies.push({ id: doc.id, ...doc.data() })
      })

      commit('GET_LOCATIONS', movies)
      dispatch('wait/end', 'locations.getItems')
    },
    async getMovies ({ commit, dispatch }) {
      dispatch('wait/start', 'movie.getItems')

      let movies = []
      let querySnapshot = await db.collection('movies').get()

      querySnapshot.forEach(async doc => {
        movies.push({ id: doc.id, ...doc.data() })
      })

      commit('GET_MOVIE', movies)
      dispatch('wait/end', 'movie.getItems')
    },
    async getShowtimes ({ commit, dispatch }, id) {
      dispatch('wait/start', 'movie.getShowtimes')

      let showtimes = []
      let querySnapshot = await db
        .collection('theatres')
        .doc(id)
        .collection('showtimes')
        .get()

      await querySnapshot.forEach(async doc => {
        let movie = await db
          .collection('movies')
          .doc(doc.data().movie)
          .get()

        showtimes.push({
          id: doc.id,
          movie: movie.data(),
          time: doc.data().time
        })
      })

      commit('GET_SHOWTIMES', showtimes)
      dispatch('wait/end', 'movie.getShowtimes')
    }
  }
})
