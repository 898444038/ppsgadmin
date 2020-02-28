import types from '@/vuex/constants/type.js'

const state = {
  name : '' || localStorage.getItem("name"),
  id: '' || localStorage.getItem("id"),
  token: '' || localStorage.getItem("token"),
  email: '' || localStorage.getItem("email"),
//   isSignin: false || localStorage.getItem("isSignin"),
//   userRole: '' || localStorage.getItem("userRole"),
}

var getters = {
  name: (state) => state.name,
  id: (state) => state.id,
  token: (state) => state.token,
  email: (state) => state.email,
//   isSignin: (state) => state.isSignin,
//   userRole: (state) => state.userRole,
//   isAdmin(state) {
//     return typeof state.userRole != 'undefined' && state.userRole != null && state.userRole.indexOf("ROLE_ADMIN") >=0
//   },
//   isUser(state) {
//     return typeof state.userRole != 'undefined' && state.userRole != null && state.userRole.indexOf("ROLE_USER") >=0
//   }
}

const actions = {
  setUserInfo(context, userinfo){
    if(typeof userinfo != 'undefined' && typeof userinfo.id != 'undefined'
        && typeof userinfo.name != 'undefined' && typeof userinfo.token != 'undefined'){
      context.commit(types.SET_USERINFO,userinfo);
    }
  },
  clearUserInfo(context){
    context.commit(types.CLEAR_USERINFO);
  }
}

const  mutations = {
  [types.SET_USERINFO](state, userinfo){
      state.name = userinfo.name;
      state.id = userinfo.id;
      state.token = userinfo.token;
      state.email = userinfo.email;
    //   state.isSignin = userinfo.isSignin;
    //   state.userRole = userinfo.userAuthorities;
      localStorage.setItem("id", userinfo.id);
      localStorage.setItem("name", userinfo.name);
      localStorage.setItem("token", userinfo.token);
      localStorage.setItem("email", userinfo.email);
    //   localStorage.setItem("isSignin", userinfo.isSignin);
    //   localStorage.setItem("userRole", userinfo.userAuthorities);
  },
  [types.CLEAR_USERINFO](state){
    state.name = '';
    state.id = '';
    state.token = '';
    state.email = '';
    // state.isSignin = false;
    // state.userRole = '';
    localStorage.setItem("id","");
    localStorage.setItem("name","");
    localStorage.setItem("token","");
    localStorage.setItem("email","");
    // localStorage.setItem("isSignin", false);
    // localStorage.setItem("userRole", '');
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}