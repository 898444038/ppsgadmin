import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import getters from './getters/user/user'
import actions from './actions/user/user'
import mutations from './mutations/user/user'
import user from './modules/user/user'

export default new vuex.Store({
  getters,
  actions,
  mutations,
  modules: {
    user
  }
})
