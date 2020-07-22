// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
//导入element-ui依赖
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
//import Header from './components/Header'
//引用axios
import axios from 'axios'

import './axios'
//全局注册 markdown
import mavonEditor from 'mavon-editor'

import 'mavon-editor/dist/css/index.css'

import './permission'


//全局进行使用
Vue.use(Element)
Vue.use(mavonEditor)
Vue.prototype.$axios = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
