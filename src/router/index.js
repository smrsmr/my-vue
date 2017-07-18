import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/center'
import Ranking from '@/components/head/ranking-list'
import publicPraise from '@/components/head/publicPraise'
import Crunchies from '@/components/head/Crunchies'
import report from '@/components/head/report'
import feverMovie from '@/components/view/fever-movie'
import serchResult from '@/components/serchResult'
import movie from '@/components/movie'
// import HtmlNav from '@/components/nav'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/ranking-list',
      component: Ranking
    },
    {
      path: '/publicPraise',
      component: publicPraise
    },
    {
      path: '/Crunchies',
      component: Crunchies
    },
    {
      path: '/report',
      component: report
    },
    {
      path: '/serchResult',
      component: serchResult
    },
    {
      path: '/fever-movie',
      component: feverMovie
    },
    {
      path: '/movie/:id',
      component: movie
    }
  ]
})
