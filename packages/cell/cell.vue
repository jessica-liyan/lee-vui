<template>
  <div class="cell"
    :class="[
      {
        'cell-tap-active': isLink,
        'cell-indent': !borderFull
      }
    ]"
    :style="{'align-items': alignItems}"
  >
    <div class="cell-hd">
      <slot name="icon"></slot>
      <div>
        <label v-if="title" :style="labelStyle">{{title}}</label>
        <div v-if="titleDesc" class="label-desc">{{titleDesc}}</div>
      </div>
      <slot name="title"></slot>
    </div>
    <div class="cell-bd" :style="{'text-align': valueAlign}">
      <span v-if="value" class="v-m">{{value}}</span>
      <slot></slot>
      <i v-if="isLink"
        class="iconfont icon-right v-m"
        :class="arrow ? (arrow === 'up' ? 'up' : 'down'): ''"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    title: String,
    value: String,
    titleDesc: String,
    borderFull: {
      type: Boolean,
      default: false
    }, // 边线
    isLink: Boolean, // 添加右向箭头
    arrow: String, // 右侧箭头的方向
    alignItems: String, // 整个cell垂直对齐方式
    valueAlign: String // 右侧部分的水平对齐方式
  },
  computed: {
    labelStyle () {
      return {
        width: this.$parent.labelWidth,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      }
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/cell.scss";
@import  "../theme/common/animate.scss";
</style>
