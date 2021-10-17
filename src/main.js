import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import routes from './routes'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/'

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
