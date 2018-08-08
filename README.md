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