import Vue from 'vue'
import Vuex from 'vuex'
import VueWait from 'vue-wait'

import { db, storage } from './main'

Vue.use(Vuex)
Vue.use(VueWait)

export default new Vuex.Store({
  state: {
    banners: [],
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
    }
  }
})
