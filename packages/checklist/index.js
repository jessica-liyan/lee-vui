import CheckList from './checklist'

CheckList.install = function (Vue, opt) {
  Vue.component(CheckList.name, CheckList)
}

export {CheckList}
