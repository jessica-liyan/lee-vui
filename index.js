import {LyButton} from './packages/button/index'
import {RadioList} from './packages/radiolist/index.js'
import {Cell} from './packages/cell/index'
import {Group} from './packages/group/index'
import {LySwitch} from './packages/switch/index'
import {CheckList} from './packages/checklist/index'
import {Checker, CheckerItem} from './packages/checker/index'
import {Tab, TabItem} from './packages/tab/index'
import {ButtonTab, ButtonTabItem} from './packages/button-tab/index'
import {Flex, FlexItem} from './packages/layout/index'
import {Input} from './packages/input/index'
import {Selector} from './packages/selector/index'
import {Modal} from './packages/modal/index'
import {Picker} from './packages/picker/index'
import {Toast} from './packages/toast/index'
import ToastPlugin from './packages/toast/toastPlugin'

import './packages/theme/common/iconfont.css'

// 插件集合
export {ToastPlugin}

// 组件集合
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
const install = function (Vue, option) {
  components.map((component, idx) => {
    Vue.component(component.name, component)
  })

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
}
export default {
  install
}
export {
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
}
