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

process.env.MOCK && require('@/mock')

Vue.use(ElementUI, { locale })
Vue.use(ElementUI)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
