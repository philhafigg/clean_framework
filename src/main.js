// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './router/routes'
import { store } from './store/store.js'

Vue.config.productionTip = false;
Vue.config.silent = true;

Vue.use(VueRouter);

//routing
const router = new VueRouter({
  
  routes: Routes,
  mode: 'history'
  //history, hash
});

new Vue({
  el:         '#app',
  router,
  store:      store,
  template:   '<App/>',
  components: { App },
  created() {
    this.$store.dispatch('setLanguage');
  }
})