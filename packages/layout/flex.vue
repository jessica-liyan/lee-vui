<template>
  <div class="flex"
    :style="{
      'padding': `0 ${gutter}px`,
      'flex-wrap': wrap ? 'wrap': 'no-wrap',
      'align-items': align,
      'justify-content': justify
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'flex',
  props: {
    gutter: Number,
    wrap: Boolean,
    align: {
      type: String,
      default: 'center'
    },
    justify: {
      type: String,
      default: 'flex-start'
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/flex.scss";
</style>
