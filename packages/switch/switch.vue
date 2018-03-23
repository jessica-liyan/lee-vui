<template>
  <cell :title="title" class="switch">
    <div slot="title"><slot name="title"></slot></div>
    <input type="checkbox" class="switch-btn" v-model="currentValue">
  </cell>
</template>

<script>
export default {
  name: 'LySwitch',
  props: {
    title: String,
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/switch.scss";
</style>
