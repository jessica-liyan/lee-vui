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
      path: `/button`,
      component: r => require.ensure([], () => r(require('../docs/button.md')))
    },
    {
      path: `/group`,
      component: r => require.ensure([], () => r(require('../docs/group.md')))
    },
    {
      path: `/cell`,
      component: r => require.ensure([], () => r(require('../docs/cell.md')))
    },
    {
      path: `/radio`,
      component: r => require.ensure([], () => r(require('../docs/radio.md')))
    },
    {
      path: `/checkbox`,
      component: r => require.ensure([], () => r(require('../docs/checkbox.md')))
    }
  ]
})
