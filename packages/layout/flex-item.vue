<template>
  <div class="flex-item"
    :style="{
      padding: `${this.$parent.gutter}px`,
      flex: span >= 1 ? span : `0 0 ${span*100}%`
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'flex-item',
  props: {
    span: Number
  }
}
</script>

<style lang="sass">
@import  "../theme/flex.scss";
</style>
