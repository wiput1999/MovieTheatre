import Vue from 'vue'
import HeyUI from 'heyui'
import en from 'heyui/dist/locale/en-US'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
Vue.use(HeyUI)
HeyUI.locale(en)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('./views/About.vue')
    },
    {
      path: '/promotion',
      name: 'promotion',
      component: () => import('./views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/About.vue')
    }
  ]
})
