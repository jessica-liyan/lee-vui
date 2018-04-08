import Vue from 'vue'
import App from './App'
import router from './router'
import VueMarkdown from 'vue-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
import Common from './util/util' // 公共方法
import Components, {ToastPlugin} from '../packages/index' // 所有自定义组件

Vue.config.productionTip = false

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.use(Common)
Vue.use(VueMarkdown)
Vue.component('vue-markdown', VueMarkdown)
Vue.use(Components)
Vue.use(ToastPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
