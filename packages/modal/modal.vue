<template>
  <div>
    <div class="modal"
      :class="{
        'animate': currentValue,
        'slideFromBottom': direction === 'bottom',
        'slideFromTop': direction === 'top',
        'slideFromLeft': direction === 'left',
        'slideFromRight': direction === 'right',
        'popFromCenter': direction === 'center'
      }"
      :style="{height: height, width: width}"
    >
      <slot></slot>
    </div>
    <div class="modal-mask fade" :class="{'animate': currentValue && showMask}" @click="currentValue = false"></div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      currentValue: this.value
    }
  },
  props: {
    direction: {
      type: String,
      default: 'bottom'
    },
    value: Boolean,
    height: String,
    width: String,
    showMask: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
      if (val) {
        this.$emit('on-show', val)
      } else {
        this.$emit('on-hide', val)
      }
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/modal.scss";
@import  "../theme/common/animate.scss";
</style>
