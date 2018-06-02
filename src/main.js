// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $axios from 'axios'
import fastclick from 'fastclick'
// 在入口文件中引入(暂时不支持单组件引入的方式):
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
import VueJsonp from 'vue-jsonp'
Vue.use(wcSwiper)
Vue.use(VueJsonp)
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.$axios = $axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
