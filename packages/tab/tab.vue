<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    value: Number
  },
  data () {
    return {
      currentIndex: this.value,
      total: 0
    }
  },
  methods: {
    updateIndex () {
      if (!this.$children || !this.$children.length) return
      this.total = this.$children.length
      this.$children.map((el, idx) => {
        el['index'] = idx
      })
    }
  },
  mounted () {
    this.updateIndex()
  },
  watch: {
    currentIndex (val, oldVal) {
      oldVal > -1 && (this.$children[oldVal].isSelected = false)
      val > -1 && (this.$children[val].isSelected = true)
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/tab.scss";
</style>
