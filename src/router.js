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
      path: '/movies',
      name: 'movies',
      component: () => import('./views/Movies.vue')
    },
    {
      path: '/seats/:id',
      props: true,
      name: 'seats',
      component: () => import('./views/SeatSelect.vue')
    },
    {
      path: '/theatre/:id',
      props: true,
      name: 'theatre',
      component: () => import('./views/TimeSelect.vue')
    },
    {
      path: '/payment/:id',
      props: true,
      name: 'payment',
      component: () => import('./views/Payment.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/refund',
      name: 'refund',
      component: () => import('./views/Refund.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/finish/:id',
      props: true,
      name: 'finish',
      component: () => import('./views/Finish.vue')
    }
  ]
})
