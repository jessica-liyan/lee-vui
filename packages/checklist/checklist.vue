<template>
  <div>
    <label class="checkbox"
      v-for="(item, index) in options"
      :for="`checkbox-${uuid}-${index}`"
      :key="index"
      :class="{
        'is-round': round
      }">
      <cell :title="getValue(item)">
        <input type="checkbox"
          :id="`checkbox-${uuid}-${index}`"
          :value="getKey(item)"
          :disabled="isDisabled(getKey(item))"
          v-model="currentValue">
        <icon name="check"></icon>
      </cell>
    </label>
  </div>
</template>

<script>
import {getKey, getValue, createId} from '../util'

export default {
  name: 'CheckList',
  filters: {
    getValue,
    getKey,
    createId
  },
  data () {
    return {
      currentValue: this.value,
      uuid: this.createId()
    }
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: Array, // v-model中数组
    round: Boolean,
    max: Number
  },
  computed: {
    valid () {
      return this.currentValue.length <= this.max
    }
  },
  methods: {
    getValue,
    getKey,
    createId,
    isDisabled (key) { // 判断是否超出限制个数（不在选中范围内，且当前选中超出限制个数）
      if (this.max > 1) {
        return this.currentValue.indexOf(key) === -1 && this.currentValue.length >= this.max
      }
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
      // 超出限制个数
      if (!this.valid) {
        this.$emit('on-error', {max: this.max})
      }
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/checklist.scss";
</style>
