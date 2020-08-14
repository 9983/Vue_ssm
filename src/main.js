// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import axios from '@/api/http'

import VueAxios from 'vue-axios'

import App from './App'
import router from './router'

// 完整引入 Element
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

/* eslint-disable no-new */

// import './../static/js/jquery/jquery-2.2.4.min.js'

// <!-- jQuery-2.2.4 js -->
// <script src="js/jquery/jquery-2.2.4.min.js"></script>
// <!-- Popper js -->
// <script src="js/bootstrap/popper.min.js"></script>
// <!-- Bootstrap js -->
// <script src="js/bootstrap/bootstrap.min.js"></script>
// <!-- All Plugins js -->
// <script src="js/plugins/plugins.js"></script>
// <!-- Active js -->
// <script src="js/active.js"></script>

// import './../static/js/bootstrap/bootstrap.min.js'
// import '../static/js/bootstrap/popper.min.js'
// import '../static/js/plugins/plugins.js'
// import '../static/js/active.js'


process.env.MOCK && require('@/mock')

Vue.use(ElementUI, { locale })
Vue.use(ElementUI)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
