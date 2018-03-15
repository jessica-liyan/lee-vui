<template>
  <div class="cell"
    :class="[
      {
        'cell-tap-active': isLink
      }
    ]"
    :style="{'align-items': alignItems}"
  >
    <div class="cell-hd">
      <slot name="icon"></slot>
      <label v-if="title" :style="labelStyle">{{title}}</label>
      <slot name="title"></slot>
    </div>
    <div class="cell-bd" :style="{'text-align': valueAlign}">
      <span class="v-m">{{value}}</span>
      <i v-if="isLink" class="iconfont icon-right v-m"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    title: String,
    value: String,
    isLink: Boolean,
    alignItems: String, // 整个cell垂直对齐方式
    valueAlign: String // 右侧部分的水平对齐方式
  },
  computed: {
    labelStyle () {
      return {
        width: this.$parent.labelWidth,
        textAlign:this.$parent.labelAlign,
        marginRight:this.$parent.labelMarginRight
      }
    }
  },
  methods: {
  },
  created () {
    console.log(this.$parent.labelWidth)
  }
}
</script>

<style lang="sass">
@import  "../theme/cell.scss";
</style>
