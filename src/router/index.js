import Vue from 'vue'
import Router from 'vue-router'
import button from '../../docs/button.md'

Vue.use(Router)

const Button = {
  template: `
    <div>
      <vue-markdown v-highlight :source="source">
      </vue-markdown>
    </div>
  `,
  data () {
    return {
      source: button
    }
  }
}

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/'
    },
    {
      path: '/button',
      component: Button
    }
  ]
})
