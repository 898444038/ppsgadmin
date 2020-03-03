import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history', // mode模式:默认hash
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login/Login')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index/index'),
      children: [
        {
          path: '/config/base',
          name: 'config',
          component: () => import('@/views/config/baseConfig')
        },
        {
          path: '/xucombat/queryCombat',
          name: 'config',
          component: () => import('@/views//xucombat/queryCombat')
        },
        {
          path: '/xucombat/imitate',
          name: 'config',
          component: () => import('@/views//xucombat/imitate')
        },
      ]
    }
  ]
})
