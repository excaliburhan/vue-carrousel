/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-24 04:06:39
 * @modify date 2017-08-30 08:26:20
 * @desc [入口文件]
*/

import VueCarrousel from './vue-carrousel.vue'
import VueCarrouselItem from './vue-carrousel-item.vue'

const install = (Vue) => {
  Vue.component('vue-carrousel', VueCarrousel)
  Vue.component('vue-carousel-item', VueCarrouselItem)
}

export default {
  install,
}
export {
  VueCarrousel,
  VueCarrouselItem,
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
