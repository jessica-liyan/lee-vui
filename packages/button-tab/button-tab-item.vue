<template>
  <div class="button-tab-item"
    :class="{'active': isSelected}"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'button-tab-item',
  props: {
  },
  data () {
    return {
      isSelected: false
    }
  },
  mounted () {
    this.$parent.updateIndex()
    this.isSelected = this.$parent.currentIndex === this.index
  },
  methods: {
    handleClick () {
      this.$parent.currentIndex = this.index
      this.$emit('on-click', this.index)
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/button-tab.scss";
</style>
