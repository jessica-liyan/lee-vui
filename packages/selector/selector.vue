<template>
  <div class="selector">
    <label>{{title}}</label>
    <div class="selector-area">
      <select :name="name" v-model="currentValue">
        <option value="" v-if="showPlaceholder" selected>{{placeholder}}</option>
        <option :value="typeof currentValue === 'object' ? item : item.key"
          :key="index"
          v-for="(item, index) in options"
        >{{item.value}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selector',
  data () {
    return {
      currentValue: ''
    }
  },
  props: {
    name: String,
    title: String,
    placeholder: String,
    value: [String, Number, Boolean, Object],
    options: Array
  },
  created () {
    this.currentValue = typeof this.value === 'undefined' ? '' : this.value
  },
  computed: {
    showPlaceholder () {
      return this.isEmpty(this.currentValue) && this.placeholder
    }
  },
  methods: {
    isEmpty (val) {
      return val === '' || val === null || typeof val === 'undefined'
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/selector.scss";
</style>
