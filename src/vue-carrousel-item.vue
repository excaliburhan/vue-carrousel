<template>
<div
  class="vue-carrousel__item" :class="{ 'is-active': active, 'is-animating': animating }" v-show="ready"
  :style="{
    msTransform: `translate${ upperDirection }(${ translate }px)`,
    webkitTransform: `translate${ upperDirection }(${ translate }px)`,
    transform: `translate${ upperDirection }(${ translate }px)`
  }"
>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'VueCarrouselItem',
  data () {
    return {
      translate: 0,
      active: false, // 是否激活，可以做样式设置
      ready: false,
      animating: false,
    }
  },
  computed: {
    upperDirection() {
      return this.$parent.direction.toUpperCase()
    },
  },

  methods: {
    translateItem (index, activeIndex, oldIndex) { // 计算translate
      const parentWidth = this.$parent.$el.offsetWidth
      const parentHeight = this.$parent.$el.offsetHeight
      const length = this.$parent.items.length
      this.animating = index === activeIndex || index === oldIndex // 处理闪现
      index = this.calcIndex(index, activeIndex, length) // 处理index
      this.active = index === activeIndex
      this.translate = (this.$parent.direction === 'x' ? parentWidth : parentHeight) * (index - activeIndex)
      this.ready = true
    },
    calcIndex (index, activeIndex, length) {
      if (activeIndex === 0 && index === length - 1) {
        return -1
      } else if (activeIndex === length - 1 && index === 0) {
        return length
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        return length + 1
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        return -2
      }
      return index
    },
  },

  created () {
    this.$parent && this.$parent.handleItemChange()
  },
  destroyed () {
    this.$parent && this.$parent.handleItemChange()
  }
}
</script>

<style lang="scss" scoped>
.vue-carrousel__item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  &.is-active {
    z-index: 2;
  }
  &.is-animating {
    transition: transform .4s ease-in-out;
  }
}
</style>
