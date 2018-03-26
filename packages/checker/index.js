import Checker from './checker'
import CheckerItem from './checker-item'

Checker.install = function (Vue, opt) {
  Vue.component(Checker.name, Checker)
}
CheckerItem.install = function (Vue, opt) {
  Vue.component(CheckerItem.name, CheckerItem)
}

export {
  Checker,
  CheckerItem
}
