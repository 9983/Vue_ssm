import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Login from '@/view/Login'
import Register from '@/view/Register'
import test from '@/view/test.vue'
import index from '@/view/Front_Desk/index.vue'
import AllCourse from '@/view/Front_Desk/AllCourse.vue'
import ReadCourse from '@/view/Front_Desk/ReadCourse.vue'

Vue.use(Router)
export default new Router({
  routes: [
   {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/',
      name: 'index',
      component: index

    },
    {
      path: '/AllCourse',
      name: 'AllCourse',
      component: AllCourse
    },
    {
      path: '/ReadCourse',
      name: 'ReadCourse',
      component: ReadCourse
    }

  ]
})
