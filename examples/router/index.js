import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/'
    },
    {
      path: '/button',
      component: r => require.ensure([], () => r(require('../docs/button.md')))
    }
  ]
})
