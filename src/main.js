import Vue from 'vue'

// 导入引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 这是按需导入了
// 链接 https://element.eleme.cn/#:~:text=%C2%B6-,%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5,-%E5%80%9F%E5%8A%A9%20babel%2Dplugin
// 在根目录上 创建 babel.config.js
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
