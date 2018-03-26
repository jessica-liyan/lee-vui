<template>
  <div class="checker">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Checker',
  data () {
    return {
      currentValue: this.value
    }
  },
  props: {
    type: { // radio or checkbox
      type: String,
      default: 'radio'
    },
    value: [String, Array, Number, Object],
    defaultItemClass: {
      type: String,
      default: ''
    },
    selectedItemClass: {
      type: String,
      default: ''
    },
    max: Number
  },
  watch: {
    value (newVal) { // 父级value的更新监控
      this.currentValue = newVal
    },
    currentValue (val) { // 更新父级v-model
      this.$emit('input', val)
      this.$emit('on-change', val)
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/checker.scss";
</style>
