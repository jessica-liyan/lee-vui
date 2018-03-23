import LyButton from './button/index'
import RadioList from './radiolist/index.js'
import Cell from './cell/index'
import Group from './group/index'
import LySwitch from './switch/index'
import CheckList from './checklist/index'

const components = [
  LyButton,
  RadioList,
  Cell,
  Group,
  LySwitch,
  CheckList
]

const install = function (Vue, opt) {
  components.map((component, idx) => {
    Vue.component(component.name, component)
  })

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
}

export default {
  install,
  LyButton,
  RadioList,
  Cell,
  Group,
  LySwitch,
  CheckList
}
