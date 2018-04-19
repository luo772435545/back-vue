import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

console.log(HelloWorld)
export default new Router({
  routes: [
    {
      path: '/123',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
