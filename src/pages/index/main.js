import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    //   页面下可以配置的属性 只是“src/main”中的window部分
    'navigationBarTitleText': '文章列表页面'
  }
}
