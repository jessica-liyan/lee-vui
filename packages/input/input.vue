<template>
  <div class="input" :class="{'single': single}">
    <img :src="iconImg" alt="" v-show="iconImg" style="width:2em;height:2em;margin-right:10px;">
    <i :class="`iconfont ${icon}`" v-show="icon" style="margin-right:10px;" v-if="!iconRight"></i>
    <slot name="icon"></slot>
    <label :style="{width: `${labelWidth}em`, textAlign: labelAlign}" v-show="title">{{title}}</label>
    <div class="input-area">
      <input :type="type"
        :placeholder="placeholder"
        :style="{textAlign: valueAlign}"
        v-model="currentValue"
        :disabled="disabled"
        :readonly="readonly"
        ref="input"
        @keyup.enter="onEnter"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
      >
    </div>
    <i class="iconfont icon-delete clear"
      v-show="showClear && currentValue && currentValue !== '' && !disabled && !readonly"
      @click="clear"
    ></i>
    <i class="iconfont icon-warning error"
      v-show="validate && currentValue && currentValue !== '' && showError && !disabled && !readonly"
    ></i>
    <i :class="`iconfont ${icon}`" v-show="icon" v-if="iconRight"></i>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'ly-input',
  props: {
    value: String,
    title: String,
    icon: String,
    iconImg: String,
    placeholder: String,
    labelWidth: {
      type: Number,
      default: 6
    },
    labelAlign: {
      type: String,
      default: 'left'
    },
    valueAlign: {
      type: String,
      default: 'left'
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: Boolean,
    readonly: Boolean,
    showClear: {
      type: Boolean,
      default: true
    },
    single: Boolean,
    iconRight: Boolean, // 图标在右侧
    validate: [String, Number] // 验证器
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    showError () {
      return this.validate !== this.currentValue
    }
  },
  created () {
  },
  methods: {
    clear () {
      this.currentValue = ''
      this.focus()
    },
    focus () { // 自动聚焦
      this.$refs.input.focus()
    },
    blur () { // 自动失焦
      this.$refs.input.blur()
    },
    onInput () { // input事件
      this.$emit('on-input', this.currentValue)
    },
    onEnter (e) { // enter事件
      this.blur()
      this.$emit('on-enter', this.currentValue)
    },
    onFocus (e) { // focus事件
      this.$emit('on-focus', this.currentValue, e)
    },
    onBlur (e) { // blur事件
      this.$emit('on-blur', this.currentValue, e)
    },
    // 验证方法集合
    validator () {
      if (typeof this.validate === 'string') {
      }
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="sass">
@import "../theme/input.scss";
</style>
