import Vue from 'vue'
// import App from './App.vue'
import Main from './Main.vue'
import router from './router'
import store from './store'

import './permission'

Vue.config.productionTip = false

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// global css
import '@/styles/index.scss'

import Cookies from 'js-cookie'
Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})

new Vue({
  router,
  store,
  render: h => h(Main),
}).$mount('#app')
