<template>
  <div class="group"
    :labelWidth="labelWidth"
    :labelAlign="labelAlign"
    :labelMarginRight="labelMarginRight"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Group',
  props: {
    labelWidth: {
      type: String
    },
    labelAlign: {
      type: String,
      default: 'left'
    },
    labelMarginRight: {
      type: String
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/group.scss";
</style>
