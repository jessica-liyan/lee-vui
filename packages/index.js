import LyButton from './button/index'
import Radio from './radio/index'
import Cell from './cell/index'
import Group from './group/index'

const components = [
  LyButton,
  Radio,
  Cell,
  Group
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
  Radio,
  Cell,
  Group
}
