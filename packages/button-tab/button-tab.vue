<template>
  <div class="button-tab" :class="{'round': round}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'button-tab',
  props: {
    value: Number,
    round: Boolean
  },
  data () {
    return {
      total: 0,
      currentIndex: this.value
    }
  },
  mounted () {
    this.updateIndex()
  },
  methods: {
    updateIndex () {
      this.total = this.$children.length
      this.$children.map((el, idx) => {
        el.index = idx
      })
    }
  },
  watch: {
    currentIndex (val, oldVal) {
      this.$children[val].isSelected = true
      this.$children[oldVal].isSelected = false
      this.$emit('input', val)
      this.$emit('on-change', val, oldVal)
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/button-tab.scss";
</style>
