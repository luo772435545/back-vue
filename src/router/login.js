import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const defUrl = 'login/components/';
const Login = () => import('@v/' + defUrl + 'login');
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
});
