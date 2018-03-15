import Cell from './cell'

Cell.install = function (Vue, opt) {
  Vue.component(Cell.name, Cell)
}

export default Cell
