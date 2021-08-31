import Vue from 'vue'
import App from './App.vue'
// 欸，改一下这里
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
