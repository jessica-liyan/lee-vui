<template>
  <div>
    <label class="radio"
      v-for="(item, index) in options"
      :for="`radio-${uuid}-${index}`"
      :key="index"
      :class="{
        'is-round': round
      }"
    >
      <cell :title="getValue(item)">
        <slot slot="icon">
          <img :src="item.icon" alt="" v-if="typeof item === 'object' && item.icon && item.icon.substr(0,4) !== 'icon'">
          <i class="iconfont" :class="item.icon" v-if="typeof item === 'object' && item.icon && item.icon.substr(0,4) == 'icon'"></i>
        </slot>
        <input type="radio"
          :id="`radio-${uuid}-${index}`"
          :value="getKey(item)"
          v-model="currentValue"
        >
        <i class="iconfont icon-check"></i>
      </cell>
    </label>
  </div>
</template>

<script>
import {getKey, getValue, getValueByKey, createId} from '../util'

export default {
  name: 'RadioList',
  filters: {
    getValue,
    getKey,
    createId
  },
  props: {
    options: Array, // 传入的单选按钮数组
    value: String, // 传入的默认值key
    round: Boolean // 圆圈样式
  },
  data () {
    return {
      uuid: this.createId(),
      currentValue: this.value // 当前激活值key
    }
  },
  methods: {
    getValue,
    getKey,
    createId
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
