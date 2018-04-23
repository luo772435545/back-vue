import Vue from 'vue';
import '@/utils/common-init.js'; // 公共配置
import store from '../../store/store';
import router from '../../router/login.js';
Vue.config.productionTip = false;

new Vue({
  router: router,
  store: store
}).$mount('#app');
