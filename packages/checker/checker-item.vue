<template>
  <div
    :class="[
      `checker-item ${defaultClass}`,
      isChecked() ? `is-checked ${selectedClass}` : ''
    ]"
    @click="select"
  >
    <slot></slot>
  </div>
</template>

<script>
import {isEqual} from '../util'

export default {
  name: 'CheckerItem',
  props: {
    value: [String, Number, Object]
  },
  computed: {
    defaultClass () {
      return this.$parent.defaultItemClass
    },
    selectedClass () {
      return this.$parent.selectedItemClass
    }
  },
  methods: {
    isChecked () {
      if (this.$parent.type === 'radio') {
        return isEqual(this.$parent.currentValue, this.value)
      } else {
        return this.$parent.currentValue.findIndex(one => isEqual(one, this.value)) !== -1
      }
    },
    select () {
      if (this.$parent.type === 'radio') {
        this.$parent.currentValue = this.value
      } else {
        if (this.isChecked()) {
          this.$parent.currentValue.splice(this.$parent.currentValue.findIndex(one => isEqual(one, this.value)), 1)
        } else {
          if (this.$parent.max && this.$parent.currentValue.length === this.$parent.max) {
            return false
          } else {
            this.$parent.currentValue.push(this.value)
          }
        }
      }
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/checker.scss";
</style>
