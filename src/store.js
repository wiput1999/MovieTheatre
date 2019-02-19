import Vue from 'vue'
import Vuex from 'vuex'
import { db, storage } from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: []
  },
  mutations: {
    GET_BANNER (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    async getBanners ({ commit }) {
      let banners = []
      let querySnapshot = await db.collection('banners').get()

      querySnapshot.forEach(async doc => {
        let url = await storage
          .ref('banner/' + doc.data().filename)
          .getDownloadURL()
        banners.push({ id: doc.id, url })
      })

      commit('GET_BANNER', banners)
    }
  }
})
