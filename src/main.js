import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入tailwind.css库
import "./tailwind.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
