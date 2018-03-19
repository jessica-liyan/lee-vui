<template>
  <div>
    <cell class="radio"
      v-for="(item, index) in options"
      :for="`radio-${index}`"
      :key="index"
      :title="getValue(item)"
      :class="{
        'is-checked': getKey(item) == currentValue,
        'is-circle': circle
      }"
    >
      <slot slot="icon">
        <img :src="item.icon" alt="" v-if="typeof item === 'object' && item.icon && item.icon.substr(0,4) !== 'icon'">
        <i class="iconfont" :class="item.icon" v-if="typeof item === 'object' && item.icon && item.icon.substr(0,4) == 'icon'"></i>
      </slot>
      <input type="radio"
        :id="`radio-${index}`"
        v-model="currentValue"
        :value="getKey(item)"
      >
      <i class="iconfont icon-check"></i>
    </cell>
  </div>
</template>

<script>
import {getKey, getValue, getValueByKey} from '../util'

export default {
  name: 'Radio',
  filters: {
    getValue,
    getKey
  },
  props: {
    options: Array, // 传入的单选按钮数组
    value: String, // 传入的默认值key
    circle: Boolean // 圆圈样式
  },
  data () {
    return {
      currentValue: this.value // 当前激活值key
    }
  },
  methods: {
  },
  watch: {
    currentValue (newVal) {
      // 参数一个，是选中的key
      this.$emit('input', newVal)
      // 参数两个，一个是key，另一个是value
      this.$emit('change', newVal, getValueByKey(this.options, newVal))
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/radio.scss";
</style>
