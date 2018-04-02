<template>
  <div class="tab" :class="{'scroll': scrollable}">
    <slot></slot>
    <div class="tab-line" :style="lineStyle">
      <span :style="{width: (barWidth && typeof barWidth === 'function') ? barWidth(currentIndex): barWidth, height: barHeight, background: activeColor}"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    value: Number,
    defaultColor: {
      type: String,
      default: '#333'
    },
    activeColor: String,
    barWidth: [String, Function],
    barHeight: String,
    scrollable: Boolean,
    scrollThreshold: Number
  },
  data () {
    return {
      currentIndex: this.value,
      total: 0
    }
  },
  computed: {
    lineStyle () {
      return {
        left: this.scrollThreshold ? `${this.currentIndex * 100 / this.scrollThreshold}%` : `${this.currentIndex * 100 / this.total}%`,
        width: this.scrollThreshold ? `${100 / this.scrollThreshold}%` : `${100 / this.total}%`
      }
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
    value (val) {
      this.currentValue = val
    },
    currentIndex (val, oldVal) {
      oldVal > -1 && (this.$children[oldVal].isSelected = false)
      val > -1 && (this.$children[val].isSelected = true)
      this.$emit('input', val)
      this.$emit('on-change', val, oldVal)
      if (this.currentIndex >= this.scrollThreshold - 1) {
        // this.$el.scrollTo(200, 0)
        this.$el.scrollLeft = `${this.currentIndex * 45}`
        console.log(this, this.$el.scrollLeft, this.$el.scrollWidth)
      } else {
        this.$el.scrollLeft = 0
      }
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/tab.scss";
</style>
