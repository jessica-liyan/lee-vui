export default {
  install: function (Vue, opt) {
    Vue.mixin({
      methods: {
        test () {
          console.log('这是一个公共的方法')
        },
        back () {
          this.$router.go(-1)
        }
      }
    })
  }
}
