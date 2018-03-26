<template>
  <div class="tab-item"
    :class="{
      'selected': isSelected
    }"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
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
    }
  },
  watch: {
    isSelected (val) {
      console.log('isSelected变化了', val)
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/tab.scss";
</style>
