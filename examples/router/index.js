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
      path: `/layout`,
      component: r => require.ensure([], () => r(require('../docs/layout.md')))
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
      path: `/radiolist`,
      component: r => require.ensure([], () => r(require('../docs/radiolist.md')))
    },
    {
      path: `/switch`,
      component: r => require.ensure([], () => r(require('../docs/switch.md')))
    },
    {
      path: `/checklist`,
      component: r => require.ensure([], () => r(require('../docs/checklist.md')))
    },
    {
      path: `/checker`,
      component: r => require.ensure([], () => r(require('../docs/checker.md')))
    },
    {
      path: `/tab`,
      component: r => require.ensure([], () => r(require('../docs/tab.md')))
    },
    {
      path: `/button-tab`,
      component: r => require.ensure([], () => r(require('../docs/button-tab.md')))
    },
    {
      path: `/input`,
      component: r => require.ensure([], () => r(require('../docs/input.md')))
    },
    {
      path: `/selector`,
      component: r => require.ensure([], () => r(require('../docs/selector.md')))
    },
    {
      path: `/modal`,
      component: r => require.ensure([], () => r(require('../docs/modal.md')))
    },
    {
      path: `/picker`,
      component: r => require.ensure([], () => r(require('../docs/picker.md')))
    }
  ]
})
