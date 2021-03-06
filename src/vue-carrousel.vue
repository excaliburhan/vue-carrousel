<template>
<div class="vue-carrousel" :style="{ width: width, height: height }">
  <div class="vue-carrousel__wrap">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'VueCarrousel',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    direction: {
      type: String,
      default: 'x'
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    playDuration: {
      type: Number,
      default: 5000
    },
    handleIndex: {
      type: [Number, String],
      default: 0
    },
  },
  data () {
    return {
      items: [],
      activeIndex: -1,
      timer: null,
    }
  },
  watch: {
    items (newVal) {
      if (newVal.length > 0) this.setActiveItem(0)
    },
    activeIndex (newVal, oldVal) {
      this.resetItemPosition(oldVal)
      this.$emit('change', newVal, oldVal)
    },
    autoPlay (newVal) {
      this.handleItemChange()
      this.$nextTick(() => {
        this.clearTimer()
        if (newVal) {
          this.startTimer()
        }
      })
    },
    playDuration (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.handleItemChange()
        this.$nextTick(() => {
          this.clearTimer()
          if (newVal) {
            this.startTimer()
          }
        })
      }
    },
    handleIndex (newVal, oldVal) {
      if (newVal !== oldVal && !this.autoPlay) {
        this.activeIndex = newVal
      }
    },
  },

  methods: {
    resetItemPosition (oldIndex) { // 设置子组件的位置
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex) // translateItem为子组件的methods
      })
    },
    setActiveItem (index) { // 设置active的子组件
      let length = this.items.length
      if (index < 0) {
        this.activeIndex = length - 1
      } else if (index >= length) {
        this.activeIndex = 0
      } else {
        this.activeIndex = index
      }
    },
    startTimer () {
      if (!this.autoPlay || this.playDuration <= 0) return
      this.timer = setInterval(this.handleIndexChange, this.playDuration)
    },
    clearTimer () {
      this.timer && clearInterval(this.timer)
    },
    handleItemChange () { // 获取子组件数组
      this.items = this.$children.filter(child => child.$options.name === 'VueCarrouselItem')
    },
    handleIndexChange () {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++
      } else {
        this.activeIndex = 0
      }
    },
  },

  mounted () {
    this.handleItemChange()
    this.$nextTick(() => {
      this.startTimer()
    })
  },
  beforeDestroy () {
    this.clearTimer()
  }
}
</script>

<style lang="scss" scoped>
.vue-carrousel {
  position: relative;
  overflow: hidden;
  &__wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
}
</style>
