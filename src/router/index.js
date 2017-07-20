import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/center'
import Ranking from '@/components/head/rankingList'
import publicPraise from '@/components/head/publicPraise'
import Crunchies from '@/components/head/Crunchies'
import report from '@/components/head/report'
import feverMovie from '@/components/view/feverMovie'
import serchResult from '@/components/serchResult'
import movie from '@/components/movie'
import coming from '@/components/view/coming-soon'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rankingList',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/publicPraise',
      name: 'publicPraise',
      component: publicPraise
    },
    {
      path: '/coming',
      name: 'coming',
      component: coming
    },
    {
      path: '/Crunchies',
      name: 'Crunchies',
      component: Crunchies
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/serchResult',
      name: 'serchResult',
      component: serchResult
    },
    {
      path: '/feverMovie',
      name: 'feverMovie',
      component: feverMovie
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: movie
    }
  ]
})
