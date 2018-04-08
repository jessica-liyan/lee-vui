<template>
  <div class="toast"
    :class="{
      'animate': currentValue,
      'slideFromBottom': position === 'bottom',
      'slideFromTop': position === 'top',
      'popFromCenter': position === 'middle'
    }"
  >
    <div class="toast-info">
      {{text}}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      currentValue: this.value
    }
  },
  props: {
    value: Boolean,
    position: {
      type: String,
      default: 'bottom'
    },
    text: String,
    duration: {
      type: Number,
      default: 3000
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      if (val) {
        this.$emit('input', true)
        this.$emit('on-show')
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.currentValue = false
          this.$emit('input', false)
          this.$emit('on-hide')
        }, this.duration)
      }
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/common/animate.scss";
@import  "../theme/toast.scss";
</style>
