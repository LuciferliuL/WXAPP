import Vue from 'vue'
import App from './App'
import Vuex from './stores/global.store'

Vue.prototype.$Vuex = Vuex
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/testadd/main',
      'pages/testadd2/main',
      'pages/index/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一个小程序',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/index/main',
        // text: '首页',
        selectedIconPath: '../static/181501-interface.jpg'
      }, {
        pagePath: 'pages/testadd/main',
        text: '日志'
      }]
    }
  }
}
