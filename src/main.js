import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/style/reset.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import './filters'  //加载过滤器
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // document.title = to.matched[0].meta.title // 修改title
  document.title = '光伏发电设计与仿真' // 修改title
  
  // console.log(to);
  // console.log('++++');
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
