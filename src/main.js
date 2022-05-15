import Vue from 'vue'

// 导入引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 这是按需导入了
// 按需就要安装插件先 yarn add babel-plugin-component -D
// import './plugins/element.js'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 全局引入element-ui
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
