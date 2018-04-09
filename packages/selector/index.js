import Selector from './selector.vue'

Selector.install = function (Vue, opt) {
  Vue.component(Selector.name, Selector)
}

export {
  Selector
}
