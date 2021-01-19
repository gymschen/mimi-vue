import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import App from './App.vue'
import env from './env'

console.log('env:', env)

// 根據前端的跨域方式做調整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000
// 錯誤攔截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
