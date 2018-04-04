<template>
  <cell :title="title" @click.native="show = true" is-link>
    <modal direction="bottom" v-model="show" class="picker">
      <flex justify="space-between" style="padding:0 1rem;" class="picker-header">
        <ly-button type="text" @click="cancel">取消</ly-button>
        <ly-button type="text" @click="confirm">确定</ly-button>
      </flex>
      <div v-if="single" id="scroller"></div>
      <flex v-if="!single">
        <flex-item :span="1" v-for="(item, index) in data" :key="index">
          <div :id="`scroller_${index}`"></div>
        </flex-item>
      </flex>
      <flex v-if="columns">
        <flex-item :span="1" v-for="(item, index) in [0, 1, 2]" :key="index">
          <div :id="`scroller_v_${index}`"></div>
        </flex-item>
      </flex>
    </modal>
    <span>{{currentValue.join('/')}}</span>
  </cell>
</template>

<script>
import Scroller from './scroller.js'
export default {
  name: 'picker',
  data () {
    return {
      show: false, // 弹窗打开与关闭
      currentValue: this.value, // 更新的元素
      selectValue: this.value, // 选中的元素
      scroller: [],
      colList: []
    }
  },
  computed: {
    single () { // 是否单列
      return this.value.length < this.data.length
    }
  },
  props: {
    title: String,
    value: [Boolean, String, Array, Number], // 默认选中的数组
    data: Array, // 列表数组
    columns: Number
  },
  mounted () {
    const _this = this
    // 三种data数组做区分判断，单列，多列数组[[],[]]，多列数组联动[{}]
    if (!this.columns) {
      if (_this.single) {
        _this.data[0] = _this.data
        _this.renderList(0, '#scroller')
      } else {
        _this.data.map((el, i) => {
          _this.renderList(i, `#scroller_${i}`)
        })
      }
    } else {
      // 地区的三列要抽出来，第一列选中后，根据第一列的选中value匹配第二列的内容
      // 第一列的选中值改变的话，第二列的列表动态调整
      this.renderChain(0)
    }
  },
  methods: {
    cancel (e) {
      e.stopPropagation()
      this.show = false
    },
    confirm (e) { // 点击确定后，将选中值更新到value中
      e.stopPropagation()
      this.show = false
      this.currentValue = this.selectValue
    },
    renderList (i, id) {
      const _this = this
      this.scroller[i] = new Scroller(id, {
        data: _this.data[i],
        defaultValue: _this.value[i],
        onSelect (val) {
          _this.selectValue[i] = val
        }
      })
    },
    renderChain (i) {
      const _this = this
      let scroller = []
      scroller[i] = new Scroller(`#scroller_v_${i}`, {
        data: i === 0 ? _this.find(0) : _this.find(_this.selectValue[i - 1]),
        defaultValue: 0,
        onSelect (val) {
          _this.selectValue[i] = val
          _this.renderChain(i + 1)
          console.log('选择的', _this.selectValue[i], _this.selectValue)
        }
      })
    },
    find (t) {
      let list = []
      this.data.forEach((el, i) => {
        if (el.parent === t) {
          list.push(el)
        }
      })
      return list
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="sass">
@import  "./scroller.scss";
@import  "../theme/picker.scss";
@import  "../theme/common/animate.scss";
</style>
