export default {
  install: function (Vue, opt) {
    Vue.mixin({
      data () {
        return {
          show: false,
          show1: false,
          chosen: '支付宝'
        }
      },
      methods: {
        test () {
          console.log('这是一个公共的方法')
          this.$router.push('button')
        },
        back () {
          this.$router.go(-1)
        },
        // 父组件监听radio值的变化
        input (data) {
          console.log('radio变化', data)
        }
      }
    })
  }
}
