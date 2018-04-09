import ButtonTab from './button-tab.vue'
import ButtonTabItem from './button-tab-item.vue'

ButtonTab.install = function (Vue, opt) {
  Vue.component(ButtonTab.name, ButtonTab)
}

ButtonTabItem.install = function (Vue, opt) {
  Vue.component(ButtonTabItem.name, ButtonTabItem)
}

export {
  ButtonTab,
  ButtonTabItem
}
