<template>
  <div class="modal"
    :class="{
      'slideFromBottom': direction === 'bottom',
      'slideFromTop': direction === 'top',
      'slideFromLeft': direction === 'left',
      'slideFromRight': direction === 'right'
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
    }
  },
  props: {
    direction: {
      type: String,
      default: 'bottom'
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/modal.scss";
@import  "../theme/common/animate.scss";
</style>
