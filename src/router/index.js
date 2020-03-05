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
          path: '/config/base',//基本配置
          name: 'configBase',
          component: () => import('@/views/config/baseConfig')
        },
        {
          path: '/config/generals',//武将配置
          name: 'configGenerals',
          component: () => import('@/views/config/generalsConfig')
        },
        {
          path: '/config/generals/add',//武将配置-新增武将
          name: 'configGeneralsAdd',
          component: () => import('@/views/config/generalsConfigAdd')
        },
        {
          path: '/xucombat/queryCombat',
          name: 'xucombatQuery',
          component: () => import('@/views/xucombat/queryCombat')
        },
        {
          path: '/xucombat/imitate',
          name: 'xucombatImitate',
          component: () => import('@/views/xucombat/imitate')
        },
        {
          path: '/activity/calendar',//活动日历
          name: 'activityCalendar',
          component: () => import('@/views/activity/calendar')
        },
      ]
    }
  ]
})
