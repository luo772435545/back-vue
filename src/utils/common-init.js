import Vue from 'vue';
import iview from 'iviewxx';
import Vuex from 'vuex';
import Axios from './request';
Vue.prototype.$axios = Axios;
Vue.use(iview);
Vue.use(Vuex);
