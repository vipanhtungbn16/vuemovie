import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "tailwindcss/tailwind.css"
import api from "../service/api";
import VueLazyload from 'vue-lazyload'

import Carousel3d from 'vue-carousel-3d';

Vue.use(VueLazyload)
Vue.use(Carousel3d)

Vue.prototype.$http = api

Vue.config.productionTip = false



const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  app.$store.commit('setLoading', true)

  // Simulate request
  setTimeout(() => {
    next();
  }, 1000)

});

router.afterEach(() => {
  app.$store.commit('setLoading', false)
});
