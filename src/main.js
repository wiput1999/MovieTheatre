import Vue from 'vue'
import VueWait from 'vue-wait'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Firebase
const config = {
  apiKey: 'AIzaSyCz0VvhM4AaW_S74pudbomtTyAdb0mV3jc',
  authDomain: 'w-movie-theatre.firebaseapp.com',
  databaseURL: 'https://w-movie-theatre.firebaseio.com',
  projectId: 'w-movie-theatre',
  storageBucket: 'w-movie-theatre.appspot.com',
  messagingSenderId: '744950843126'
}

firebase.initializeApp(config)

export const db = firebase.firestore()
export const storage = firebase.storage()

new Vue({
  router,
  store,
  wait: new VueWait({
    useVuex: true
  }),
  render: h => h(App)
}).$mount('#app')
