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
          v-model="currentValue">
        <i class="iconfont icon-check"></i>
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
    value: Array,
    round: Boolean,
    max: Number
  },
  methods: {
    getValue,
    getKey,
    createId
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/checklist.scss";
</style>
