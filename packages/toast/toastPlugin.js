import ToastComponent from './toast'

let $vm

export default {
  install (vue, options) {
    const Toast = vue.extend(ToastComponent)
    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    vue.prototype.$toast = {
      show (options) {
        $vm.currentValue = true
        $vm.text = options.text
        $vm.duration = options.duration
        $vm.position = options.position
        $vm.$watch('currentValue', (val) => {
          if (val) {
            options.onShow()
          } else {
            options.onHide()
          }
        })
      },
      hide () {
        $vm.currentValue = false
      }
    }
  }
}
