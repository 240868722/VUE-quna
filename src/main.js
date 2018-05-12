// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//解决移动端300ms延迟
import fastClick from "fastclick"
//样式重置
import "styles/reset.css"
//解决移动端1px问题
import "styles/border.css"
//阿里云图标
import "styles/iconfont.css"
//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'



Vue.config.productionTip = false
//解决移动端300ms延迟
fastClick.attach(document.body)
//轮播图插件
Vue.use(VueAwesomeSwiper, /* { default global options } */)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
