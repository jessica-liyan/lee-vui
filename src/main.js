// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMarkdown from 'vue-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

import LyButton from '../packages/button/index'

Vue.config.productionTip = false

Vue.use(VueMarkdown)

Vue.component('vue-markdown', VueMarkdown)

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.use(LyButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
