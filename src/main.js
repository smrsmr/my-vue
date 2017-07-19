// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import axios from 'axios'
import spinner from './components/spinner/spinner'
import '@/assets/css/reset'
import '@/assets/css/bootstrap'
import $ from 'jquery'
import '@/assets/js/bootstrap'
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App , spinner}
});
