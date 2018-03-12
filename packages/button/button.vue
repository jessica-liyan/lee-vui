<template>
  <button
    class="e-button"
    :class="[
      type? 'e-button--' + type: '',
      size? 'e-button--' + size: '',
      plain? 'is-plain': '',
      round? 'is-round': ''
    ]"
  >这是一个按钮</button>
</template>

<script>
export default {
  name: 'LyButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: String,
    plain: Boolean,
    round: Boolean
  }
}
</script>

<style lang="sass">
@import  "../theme/button.scss";
</style>
