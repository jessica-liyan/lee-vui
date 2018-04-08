import LyButton from './button/index'
import RadioList from './radiolist/index.js'
import Cell from './cell/index'
import Group from './group/index'
import LySwitch from './switch/index'
import CheckList from './checklist/index'
import {Checker, CheckerItem} from './checker/index'
import {Tab, TabItem} from './tab/index'
import {ButtonTab, ButtonTabItem} from './button-tab/index'
import {Flex, FlexItem} from './layout/index'
import {Input} from './input/index'
import {Selector} from './selector/index'
import {Modal} from './modal/index'
import {Picker} from './picker/index'
import {Toast} from './toast/index'
import ToastPlugin from './toast/toastPlugin'

const components = [
  LyButton,
  RadioList,
  Cell,
  Group,
  LySwitch,
  CheckList,
  Checker,
  CheckerItem,
  Tab,
  TabItem,
  ButtonTab,
  ButtonTabItem,
  Flex,
  FlexItem,
  Input,
  Selector,
  Modal,
  Picker,
  Toast
]

// 插件集合
export {ToastPlugin}

// 组件集合
export default {
  install (Vue, option) {
    components.map((component, idx) => {
      Vue.component(component.name, component)
    })
  }
}
