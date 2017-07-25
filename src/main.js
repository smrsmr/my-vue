// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import spinner from './components/spinner/spinner'
import '../static/css/reset'
import '../static/css/bootstrap'
import $ from 'jquery'
import '../static/js/bootstrap'
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

import VueResource from 'vue-resource';
Vue.prototype.router = router;
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App , spinner,}

});
