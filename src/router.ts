import Vue from 'vue'
import Router from 'vue-router'
import Special from './views/special.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'special',
      component: Special
    },
  ]
})
