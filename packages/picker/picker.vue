<template>
  <cell title="选择类型" @click.native="show = true" is-link>
    <modal direction="bottom" v-model="show" class="picker">
      <flex justify="space-between" style="padding:0 1rem;" class="picker-header">
        <ly-button type="text" @click="cancel">取消</ly-button>
        <ly-button type="text" @click="confirm">确定</ly-button>
      </flex>
      <div id="scroller"></div>
    </modal>
    <span>{{currentValue}}</span>
  </cell>
</template>

<script>
import Scroller from './scroller.js'
export default {
  name: 'picker',
  data () {
    return {
      show: false,
      currentValue: this.value,
      selectValue: ''
    }
  },
  props: {
    value: [Boolean, String, Array, Number],
    data: Array,
    height: {
      type: String
    }
  },
  mounted () {
    const _this = this
    _this.scroller = new Scroller(`#scroller`, {
      data: _this.data,
      defaultValue: _this.currentValue,
      onSelect (val) {
        _this.selectValue = val
      }
    })
  },
  methods: {
    cancel (e) {
      e.stopPropagation()
      this.show = false
    },
    confirm (e) {
      e.stopPropagation()
      this.show = false
      this.currentValue = this.selectValue
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="sass">
@import  "./scroller.scss";
@import  "../theme/picker.scss";
@import  "../theme/common/animate.scss";
</style>
