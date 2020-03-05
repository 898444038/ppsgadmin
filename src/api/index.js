import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import router from '../router/index'
import store from '../vuex/index'

let source = axios.CancelToken.source()

// 创建axios实例
const instance = axios.create({
  // baseURL: process.env.API_HOST, // api的base_url
  baseURL: 'http://szm5a7.natappfree.cc/',
  withCredentials: true,
  timeout: 1000000, // 请求超时时间
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*'
  // }
  // params: {}, // 请求参数在url上
  // data: {} // 请求参数在请求体
})

// const instance2 = axios.create({
//   baseURL: process.env.BASE_URL, // api的base_url
//   timeout: 1000 // 请求超时时间
// })

// 请求拦截器
// eslint-disable-next-line no-unused-vars
let req = instance.interceptors.request.use(function (config) {
  // 根据各自情况加入token-安全携带,我这每一个都要token，所以都是true
  // eslint-disable-next-line no-constant-condition
  if (true) {
    // 让每个请求携带token
    //config.headers['Access-Control-Allow-Origin'] = '*'
    //config.headers['Access-Control-Allow-Method'] = 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    
    config.headers['Authorization'] = store.state.user.token //JSON.parse(sessionStorage.getItem('token'))
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 取消请求拦截器
// instance.interceptors.request.eject(req)

// 响应拦截器
// eslint-disable-next-line no-unused-vars
let res = instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const res = response.data
  // token存sessionStorage
  if (res.hasOwnProperty('token')) {
    sessionStorage.setItem('token', JSON.stringify({data: res.token}))
  }
  // 我的协议这类错误提示为 msg: "token不存在或者无效"
  if (!res.success && res.msg === 'token不存在或者无效') {
    Vue.prototype.$message({
      message: 'token失效，请重新登录!',
      type: 'warning'
    })
    router.push({path: '/'})
  } else {
    // 如果没问题一定要返回
    return res
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 取消响应拦截器
// instance.interceptors.response.eject(res)

// post 导出请求
const postExport = function (url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, qs.stringify(params),{responseType: 'arraybuffer'}).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// post：表单+文件上传
const post = function (url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, params).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// post form请求
const postForm = function (url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, qs.stringify(params)).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// source.cancel('取消请求')

// get:获取数据
const get = function (url, params) {
  return new Promise((resolve, reject) => {
    instance({
      url: url,
      method: 'get',
      params: params,
      cancelToken: source.token
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// put:更新(提交所有数据)
const put = function (url, params) {}

// patch:更新(提交修改的数据)
const patch = function (url, params) {}

// delete:删除，参数在链接上
const delete1 = function (url, params) {
  return new Promise((resolve, reject) => {
    instance.delete(url, {params: params}).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// delete:删除，参数不在链接上
const delete2 = function (url, params) {
  return new Promise((resolve, reject) => {
    instance.delete(url, {data: params}).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// 并发请求：同时发出多个请求，统一处理返回值
const all = function (axiosList, spreads) {
  return new Promise((resolve, reject) => {
    instance.all(axiosList).then(
      instance.spread(spreads)
    ).catch(error => {
      reject(error)
    })
  })
}

// 暴露post、get方法
export default {instance, post, get, postForm, put, patch, delete1, delete2, all}
