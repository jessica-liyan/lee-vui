import Flex from './flex'
import FlexItem from './flex-item'

Flex.install = function (Vue, opt) {
  Vue.component(Flex.name, Flex)
}
FlexItem.install = function (Vue, opt) {
  Vue.component(FlexItem.name, FlexItem)
}

export {
  Flex,
  FlexItem
}
