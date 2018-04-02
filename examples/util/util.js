export default {
  install: function (Vue, opt) {
    Vue.mixin({
      data () {
        return {
          show: false,
          show1: false,
          show2: false,
          show3: false,
          show4: false,
          show5: false,
          radio: '微信', // radio
          radio1: 'alipay',
          isCheck: true, // switch
          selected: ['啤酒', '饮料'], // checklist
          selected1: ['beer'],
          selected2: [2],
          selected3: 'bj', // checker
          selected4: ['bj', 'sz'], // checker
          selected5: [{
            key: 'bj',
            value: '北京'
          }, {
            key: 'sh',
            value: '上海'
          }, {
            key: 'gz',
            value: '广州'
          }, {
            key: 'sz',
            value: '深圳'
          }],
          selected6: null,
          selected7: {key: 'bj', value: '北京'},
          selected8: [{key: 'bj', value: '北京'}, {key: 'sh', value: '上海'}],
          tabs: 0, // tab
          itemStyle: { // flex
            padding: '10px',
            fontSize: '14px',
            color: '#333',
            background: '#ddd'
          },
          inputval: '李成程',
          empty: '',
          cites: [{key: 'bj', value: '北京'}, {key: 'sh', value: '上海'}, {key: 'sz', value: '深圳'}, {key: 'gz', value: '广州'}, {key: 'wh', value: '武汉'}],
          year: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
          year1: '2020',
          year2: [[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022], [1, 2, 3, 4, 5, 6]]
        }
      },
      methods: {
        getWidth (idx) {
          return `${(idx + 2) * 10}px`
        },
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
        },
        handle (val, oldVal) {
          console.log('on-change', val, oldVal)
        },
        itemHandle (val) {
          console.log('当前点击', val)
        },
        onInput (val) {
          console.log('on-input', val)
        },
        onEnter (val) { // input onEnter
          console.log('on-enter', val)
        },
        onFocus (val, e) { // input onEnter
          console.log('on-focus', val, e)
        },
        onBlur (val, e) { // input onEnter
          console.log('on-blur', val, e)
        },
        onshow (val) { // modal
          console.log('on-show', val)
        },
        onhide (val) { // modal
          console.log('on-hide', val)
        }
      }
    })
  }
}
