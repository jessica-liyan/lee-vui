import Group from './group'

Group.install = function (Vue, opt) {
  Vue.component(Group.name, Group)
}

export default Group
