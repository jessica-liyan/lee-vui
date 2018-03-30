## modal
### 基本用法
<ly-button @click="show = true">下滑出弹窗</ly-button>
<modal direction="bottom" :class="{'animate': show}">
  <span style="display:block;height:200px;">
    <span>弹窗内容</span>
    <ly-button @click="show = false">关闭</ly-button>
  </span>
</modal>
<div class="modal-mask fade" :class="{'animate': show}" @click="show = false"></div>

<ly-button @click="show1 = true">上滑出弹窗</ly-button>
<modal direction="top" :class="{'animate': show1}">
  <span style="display:block;height:200px;">
    <span>弹窗内容</span>
    <ly-button @click="show1 = false">关闭</ly-button>
  </span>
</modal>
<div class="modal-mask fade" :class="{'animate': show1}" @click="show1 = false"></div>

<ly-button @click="show2 = true">左滑出弹窗</ly-button>
<modal direction="left" :class="{'animate': show2}">
  <span style="display:block;width:200px;">
    <span>弹窗内容</span>
    <ly-button @click="show2 = false">关闭</ly-button>
  </span>
</modal>
<div class="modal-mask fade" :class="{'animate': show2}" @click="show2 = false"></div>

<ly-button @click="show3 = true">右滑出弹窗</ly-button>
<modal direction="right" :class="{'animate': show3}">
  <span style="display:block;width:200px;">
    <span>弹窗内容</span>
    <ly-button @click="show3 = false">关闭</ly-button>
  </span>
</modal>
<div class="modal-mask fade" :class="{'animate': show3}" @click="show3 = false"></div>

<ul class="description">
  <li><code>direction</code>top/bottom/left/right，默认bottom。弹窗弹出的方向</li>
</ul>