import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Login from '@/view/Login'
import Register from '@/view/Register'
import test from '@/view/test.vue'
import index from '@/view/Front_Desk/index.vue'
import AllCourse from '@/view/Front_Desk/AllCourse.vue'
import test_2 from '@/components/test_2.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/index',
      name: 'index',
      component: index

    },
    {
      path: '/AllCourse',
      name: 'AllCourse',
      component: AllCourse
    },
    {
      path: '/test_2',
      name: 'test_2',
      component: test_2
    }

  ]
})
