# vue-carrousel
一个Vue轮播组件

## 安装

> npm install vue-carrousel --save

## 使用

### 全局组件

```
import VueCarrousel from 'vue-carrousel'
Vue.use(VueCarrousel)
```

### 局部组件

```
import { VueCarrousel, VueCarrouselItem } from 'vue-carrousel'

new Vue({
  components: {
    VueCarrousel,
    VueCarrouselItem
  },
})

<vue-carrousel height="300px">
  <vue-carrousel-item v-for="item in 4" :key="item">
    <h3>{{ item }}</h3>
  </vue-carrousel-item>
</vue-carrousel>
```
