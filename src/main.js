import Vue from 'vue'
import App from './App.vue'

import VueRellax from 'vue-rellax'

import BootstrapVue from 'bootstrap-vue'
import '@/assets/scss/app.scss'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(VueRellax)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
