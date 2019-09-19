import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './plugins/element.js'
import axios from 'axios'
// import bus from "./service"
// Vue.use(Bus)
import {
  api
} from './https/request'
import "./assets/iconfont/iconfont.css"
Vue.config.productionTip = false
Vue.use(ElementUI)
const Bus = new Vue()
Vue.prototype.$axios = axios
Vue.prototype.$api = api
new Vue({
  router,
  store,
  data: {
    Bus
  },
  render: h => h(App)
}).$mount('#app')
