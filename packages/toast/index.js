import Toast from './toast'

Toast.install = function (Vue, opt) {
  Vue.component(Toast.name, Toast)
}

export {
  Toast
}
