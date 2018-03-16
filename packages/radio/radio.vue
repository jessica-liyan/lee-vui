<template>
  <div>
    <cell class="radio"
      v-for="(item, index) in options"
      :for="`radio-${index}`"
      :key="index"
      :title="item"
      @click.native="handleClick"
    >
      <input type="radio" :id="`radio-${index}`" ref="input">
      <i class="iconfont icon-check"></i>
    </cell>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    options: Array
  },
  computed: {
  },
  
  methods: {
    handleClick () {
      console.log(this.$refs.input)
    }
  }
}
</script>

<style lang="sass">
@import  "../theme/radio.scss";
</style>
