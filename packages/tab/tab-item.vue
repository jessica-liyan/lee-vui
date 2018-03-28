<template>
  <div class="tab-item"
    :class="{
      'selected': isSelected
    }"
    :style="customStyle"
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
  computed: {
    customStyle () {
      return {
        width: this.$parent.barWidth,
        color: this.isSelected ? this.$parent.activeColor : this.$parent.defaultColor
      }
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
@import  "../theme/tab.scss";
</style>
