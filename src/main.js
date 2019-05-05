import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
