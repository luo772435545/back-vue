import Vue from 'vue'
import router from '../../router/demo01.js'

console.log('....');
Vue.config.productionTip = false
console.log(router)
/* eslint-disable no-new */
new Vue({
  router:router
}).$mount('#app')
