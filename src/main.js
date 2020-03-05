// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui'
import store from './vuex/index'

import api from './api/index'
import request from './api/api'

import excel from './components/js/excel'
Vue.use(excel)

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$ajax = api
Vue.prototype.$request = request
Vue.prototype.$axios = axios

/* eslint-disable no-new */
// 首先，引入vue模块
// 引入App.vue并命名为App
// 引入vue-router路由的配置文件（注意，不是vue-router本身）
// 然后创建vue实例，这是根实例，注册App根组件（components），最终把这个根实例挂载到index.html的#app上（el），
new Vue({
  el: '#root',
  router,
  store,
  components: { App },
  template: '<App/>'
})


