<template>
  <i :class="`iconfont icon-${name}`"></i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: String
  }
}
</script>

<style lang="sass">
@import  "../theme/common/iconfont.css";
</style>
