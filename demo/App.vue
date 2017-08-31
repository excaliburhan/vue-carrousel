<template>
<div id="app" class="app">
  <a :href="githubLink" class="github-corner" aria-label="View source on Github">
    <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#70B7FD; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>
  </a>
  <h1>Vue Carrousel</h1>
  <div class="app-wrap">
    <div class="app-item">
      <h2>基础用法</h2>
      <vue-carrousel height="300px">
        <vue-carrousel-item v-for="item in 4" :key="item">
          <h3 :style="{ lineHeight: '300px', textAlign: 'center', background: '#70B7FD' }">{{ item }}</h3>
        </vue-carrousel-item>
      </vue-carrousel>
      <pre class="app-item__code"><code class="html">{{ code1 }}</code></pre>
    </div>
    <div class="app-item">
      <h2>参数</h2>
      <table cellspacing="0">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>width</td>
            <td>宽度</td>
            <td>string</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>height</td>
            <td>高度</td>
            <td>string</td>
            <td>300px</td>
          </tr>
          <tr>
            <td>direction</td>
            <td>轮播方向</td>
            <td>string</td>
            <td>x</td>
          </tr>
          <tr>
            <td>autoPlay</td>
            <td>自动播放</td>
            <td>boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>playDuration</td>
            <td>轮播间隔</td>
            <td>number</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>handleIndex</td>
            <td>手动设置的展示index，autoPlay必须为false</td>
            <td>number</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import VueCarrousel from '@/vue-carrousel'
import VueCarrouselItem from '@/vue-carrousel-item'

export default {
  components: { VueCarrousel, VueCarrouselItem },
  data () {
    return {
      githubLink: 'https://github.com/excaliburhan/vue-carrousel',
      code1: `<vue-carrousel height="300px">
  <vue-carrousel-item v-for="item in 4" :key="item">
    <h3>{{ item }}</h3>
  </vue-carrousel-item>
</vue-carrousel>`,
    }
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  color: #fff;
  background-color: #2d3a4b;
}
.app {
  h1 {
    margin: 50px auto 0;
    text-align: center;
    font-size: 50px;
  }
  &-wrap {
    width: 800px;
    margin: 0 auto;
    padding: 50px 200px;
  }
  &-item {
    margin-bottom: 30px;
    &__code {
      margin-top: 30px;
    }
    &__eg1 {
      margin-top: 30px;
      margin-right: 30px;
    }
    &__btn {
      display: inline-block;
      box-sizing: border-box;
      line-height: 1;
      cursor: pointer;
      text-align: center;
      margin: 0;
      padding: 7px 9px;
      font-size: 12px;
      border-radius: 4px;
      color: #fff;
      background-color: #20a0ff;
      border: 1px solid #20a0ff;
    }
  }
  table {
    width: 800px;
    margin-top: 20px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  table th, table td {
    border-collapse: collapse;
    padding: 3px;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
  }
}
</style>
