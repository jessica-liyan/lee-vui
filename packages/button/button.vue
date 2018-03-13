<template>
  <button
    class="e-button"
    :class="[
      type? `e-button--${type}` : '',
      size? `e-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-block': block,
        'is-disabled': disabled
      }
    ]"
    :style="gradientStyle"
    :type="nativeType"
    :disabled = "disabled"
    @click="handleClick"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'LyButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    size: String,
    plain: Boolean,
    round: Boolean,
    block: Boolean,
    disabled: Boolean,
    gradient: Array,
    link: [String, Object]
  },
  computed: {
    gradientStyle () {
      if (this.gradient) {
        return {
          'background': `linear-gradient(90deg, ${this.gradient[0]}, ${this.gradient[1]})`,
          'borderWidth': 0
        }
      }
    }
  },
  methods: {
    handleClick (evt) {
      console.log('click', this)
      !this.disabled && this.$emit('click', evt)
      this.$router.push(this.link)
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/button.scss";
</style>
