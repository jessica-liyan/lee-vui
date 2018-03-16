export default {
  install: function (Vue, opt) {
    Vue.mixin({
      data () {
        return {
          show: false,
          show1: false
        }
      },
      methods: {
        test () {
          console.log('这是一个公共的方法')
          this.$router.push('button')
        },
        back () {
          this.$router.go(-1)
        }
      }
    })
  }
}
