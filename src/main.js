import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Main from './Main.vue'
import router from './router'

new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')
