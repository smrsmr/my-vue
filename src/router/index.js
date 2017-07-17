import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/center'
import FilmBoy from '@/components/head/FilmBoy'
import Movie from '@/components/head/movie'
import Teleplay from '@/components/head/teleplay'
import Ranking from '@/components/head/ranking-list'
import Classify from '@/components/head/classify'
import Inception from '@/components/head/Inception'
import Crunchies from '@/components/head/Crunchies'
import report from '@/components/head/report'
import feverMovie from '@/components/view/fever-movie'
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
      path: '/FilmBoy',
      component: FilmBoy
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/teleplay',
      component: Teleplay
    },
    {
      path: '/ranking-list',
      component: Ranking
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/Inception',
      component: Inception
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
      path: '/fever-movie',
      component: feverMovie
    }
  ]
})
