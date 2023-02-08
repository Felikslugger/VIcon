```npm install```

```npm run dev```





### 去iconfont官网，下载图标到本地

批量加购脚本：

一键加入购物车(一整页的图标)

控制台：

```js
var iconlist = document.querySelectorAll('.icon-gouwuche1');
Array.from(iconlist).forEach(v=>v.click())
```

加入购物车后批量拿到名称：

```js
var iconlist = document.querySelectorAll('.icon-code-show');
Array.from(iconlist).forEach(v=>arr.push(v.innerHTML));
console.log(arr.slice(arr.length / 2, arr.length)) //数量过多会重复，截取后半部分
```



### 修改iconfont.css

```css
@font-face {
  font-family: "iconfont";
  /* Project id 3723539 */
  src: url('iconfont.woff2?t=1667234554559') format('woff2'),
    url('iconfont.woff?t=1667234554559') format('woff'),
    url('iconfont.ttf?t=1667234554559') format('truetype');
}

[class*=" v-icon"],
[class^="v-icon"] {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### 写组件

```vue
<template>
  <i :class="'v-icon-' + name"></i>
</template>
<script>
export default {
  name: 'VIcon',
  props: { name: String }
}
</script>
<style>
@import url('./iconfont.css')
</style>
```

### main.js引入，注册

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

import VIcon from './components/v-icon/index.vue'

const app = createApp(App)

app.component('v-icon', VIcon)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')

// createApp(App).use(store).use(router).mount('#app')
```

### 使用

```vue
<v-icon name="iconname"></v-icon>
```









## 打包成npm包发布

#### 在根目录下新建plugins文件夹

![image-20230203155932796](E:\TyporaImages\image-20230203155932796.png)

```vue.config.js```文件中添加

```js
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pages: {
    index: {
      entry: 'src/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录
    // 新增一个 ~ 指向 plugins
    config.resolve.alias
      .set('~', path.resolve('plugins'))

    // 把 plugins 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/plugins/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
})
```

```plugins->components->index.js```用于暴露组件

```js
import VIcon from "./components/v-icon/index.vue";

// VIcon.install = Vue => Vue.component(VIcon); //注册组件--vue2
VIcon.install = createApp => createApp.component('v-icon', VIcon); //注册组件--vue3

export default VIcon;
```



在```package.json```中的```scripts```中新增```lib```

```json
"scripts": {
    "dev": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lib": "vue-cli-service build --target lib --name feliksvicon -dest lib plugins/index.js",
    "lint": "vue-cli-service lint"
  },
```

在```package.json```中配置打包信息

```json
{
  "name": "feliksvicon",
  "version": "0.1.0",
  "description": "iconfont组件封装",
  "private": false,
  "author": "felikschen",
  "license": "MIT",
  "scripts": {
    "dev": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lib": "vue-cli-service build --target lib --name feliksvicon -dest lib plugins/index.js",
    "lint": "vue-cli-service lint"
  },
  "keywords": [
    "vue",
    "vue3",
    "iconfont",
    "icon"
  ],
  "main": "dist/feliksvicon.umd.min.js",
   ... 
}
```

在```.gitignore```文件中添加

```git
src/
plugins/
public/
vue.config.js
babel.config.js
*.map
*.html
```

把包的一些测试文件过滤掉，最终打包只留下直接封装的文件，即plugins中封装的暴露组件



终端执行```npm run lib```

登录npm：  ```npm login```

发布：```npm publish```

若报错：

403：可能包名重复，换个名字；可能镜像问题(用了淘宝镜像)```npm install -g nrm```     ```nrm use npm```切换掉淘宝镜像

404：在npm官网新建组织，再用```npm publish --access public```发布

