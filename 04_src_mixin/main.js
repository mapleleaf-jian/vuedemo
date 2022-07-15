import Vue from 'vue'
import App from './App'
// 全局引入混合
// import {mixin} from './mixin.js'

Vue.config.productionTip = false

// Vue.mixin(mixin)

new Vue({
  render: h => h(App)
}).$mount('#app')