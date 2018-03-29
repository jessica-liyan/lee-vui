<template>
  <div class="input">
    <img :src="iconImg" alt="" v-show="iconImg" style="width:2em;height:2em;margin-right:10px;">
    <i :class="`iconfont ${icon}`" v-show="icon" style="margin-right:10px;"></i>
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
      >
    </div>
    <i class="iconfont icon-delete clear"
      v-show="showClear && currentValue && currentValue !== '' && !disabled && !readonly"
      @click="clear"
    ></i>
    <i class="iconfont icon-warning error"
      v-show="validate && currentValue && currentValue !== '' && showError && !disabled && !readonly"
    ></i>
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
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
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
