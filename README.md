# wxapp

> a project Godeyes

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 文件目录说明：
    
## components :组件
## pages : 存放小程序的页面
## utils : 可选（可删除），代码中一些公用工具函数组织成模块放在这里
## main.js App.vue : 入口文件

# pages创建说明：
    
## 规则 : 每个文件夹下面一个vue文件实现主题功能，一个main.js 实例页面
### ps: 每个页面都可以有单独的配置 例如每个main.js 都可以是src/main.js 这个样子的
### 配置文件中pages数组里面的第一个page会默认做为首页，自己配置首页在引用前添加^即可

# 一些坑：
    
## 在模板中，动态插入HTML的v-html指令不可用 可以用<rich-text>组件或者wxParse(https://github.com/icindy/wxParse)来实现
## 在模板中，用于数据绑定的双括号语法{{}}中的表达式功能存在诸多限制,最好只使用简单计算
## 在模板中，除事件监听外，其余地方都不能调用methods下的函数
## 在模板中，不支持直接绑定一个对象到style或class属性上
### 通用的方法都写在计算属性里面 computed：{}
## 在模板中，嵌套使用v-for时，必须指定索引index
## 事件处理中的注意点
### .stop 的使用会阻止冒泡，但是同时绑定了一个非冒泡事件，会导致该元素上的 catchEventName 失效！

        .prevent 可以直接干掉，因为小程序里没有什么默认事件，比如submit并不会跳转页面【也就是不需要支持】

        .capture 支持 1.0.9 【也就是在 mpvue 1.0.9及以后版本支持】

        .self 没有可以判断的标识 【也就是不支持】

        .once 也不能做，因为小程序没有 removeEventListener, 虽然可以直接在 handleProxy 中处理，但非常的不优雅，违背了原意，暂不考虑【也就是不支持】

## 对于表单，请直接使用小程序原生的表单组件
## 其他注意事项 
    请使用<a>标签和小程序原生API wx.navigateTo等来做路由功能。
    请使用小程序的原生API wx.request等来进行

# mpvue 
## 写的小程序组件之间不是引用单Vue实例的结构，是多Vue实例，每个page下面的main说明了这个。所以在使用vuex的时候，直接通过import导入store的模块文件，然后调用是比较灵活的。
## import Vuex from './stores/global.store'
        Vue.prototype.$Vuex = Vuex
        在vue实例里面的原型添加方法，这样在其他的地方可以直接使用vuex
## 推荐把小程序的所有api都封装成promise形式，原生的是回调形式

# 小程序标签
    navigator 导航， url添加跳转地址
    wx.navigator 方法来跳转