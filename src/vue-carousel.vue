<template>
<div class="vue-mark">
  <slot></slot>
  <sup
    v-show="!hidden && (content || isDot)"
    class="vue-mark__content" :class="{ 'is-dot': isDot }"
  >{{ content }}</sup>
</div>
</template>

<script>
export default {
  name: 'vue-mark',
  props: {
    value: '',
    max: {
      type: Number,
      default: 99
    },
    isDot: Boolean,
    hidden: Boolean,
  },
  computed: {
    content () {
      if (this.isDot) return
      const value = this.value
      const max = this.max

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }

      return value
    }
  },
}
</script>

<style lang="scss" scoped>
.vue-mark {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  &__content {
    position: absolute;
    top: 0;
    right: 10px;
    display: inline-block;
    transform: translateY(-50%) translateX(100%);
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    white-space: nowrap;
    background-color: #ff4949;
    border: 1px solid #fff;
    border-radius: 10px;
    &.is-dot {
      width: 8px;
      height: 8px;
      padding: 0;
      right: 5px;
      border-radius: 50%;
    }
  }
}
</style>
