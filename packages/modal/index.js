import Modal from './modal.vue'

Modal.install = function (Vue, opt) {
  Vue.component(Modal.name, Modal)
}

export {
  Modal
}
