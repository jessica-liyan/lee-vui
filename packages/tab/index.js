import Tab from './tab'
import TabItem from './tab-item'

Tab.install = function (Vue, opt) {
  Vue.component(Tab.name, Tab)
}

TabItem.install = function (Vue, opt) {
  Vue.component(TabItem.name, TabItem)
}

export {
  Tab,
  TabItem
}
