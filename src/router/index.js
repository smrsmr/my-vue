import Vue from 'vue'
import Router from 'vue-router'
import nav from '@/components/nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: nav
    }
  ]
})
