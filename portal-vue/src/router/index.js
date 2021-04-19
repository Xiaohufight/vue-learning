import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/hello/HelloWorld'
import Login from '@/views/login/Login'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
          path: '/',
          name: 'Login', //跳转名称
          component: Login //和上面的login对应进行跳转
    }
  ]
})
