## modal
### 基本用法
<ul class="description">
  <li><code>v-model</code>boolean，是否打开弹窗</li>
  <li><code>direction</code>top/bottom/left/right/center，默认bottom。弹窗弹出的方向</li>
  <li><code>width</code>弹窗宽度，针对direction="left" "right" "center"有效</li>
  <li><code>height</code>弹窗高度，针对direction="top" "bottom" "center"有效</li>
  <li><code>show-mask</code>boolean，是否显示遮罩层，默认true</li>
  <li><code>on-show</code>监听打开弹窗事件</li>
  <li><code>on-hide</code>监听关闭弹窗事件</li>
</ul>

<ly-button @click="show = true">下滑出弹窗</ly-button>
<modal direction="bottom" v-model="show" height="200px">
  <span>弹窗内容{{show}}</span>
  <ly-button @click="show = false">关闭</ly-button>
</modal>
```html
  <ly-button @click="show = true">下滑出弹窗</ly-button>
  <modal direction="bottom" v-model="show" height="200px">
    <span>弹窗内容{{show}}</span>
    <ly-button @click="show = false">关闭</ly-button>
  </modal>
```

<ly-button @click="show1 = true">上滑出弹窗</ly-button>
<modal direction="top" v-model="show1" height="50%">
  <span>弹窗内容</span>
  <ly-button @click="show1 = false">关闭</ly-button>
</modal>

```html
  <ly-button @click="show1 = true">上滑出弹窗</ly-button>
  <modal direction="top" v-model="show1" height="50%">
    <span>弹窗内容</span>
    <ly-button @click="show1 = false">关闭</ly-button>
  </modal>
```

<ly-button @click="show2 = true">左滑出弹窗</ly-button>
<modal direction="left" v-model="show2" width="50%">
  <span>弹窗内容</span>
  <ly-button @click="show2 = false">关闭</ly-button>
</modal>

```html
  <ly-button @click="show2 = true">左滑出弹窗</ly-button>
  <modal direction="left" v-model="show2" width="50%">
    <span>弹窗内容</span>
    <ly-button @click="show2 = false">关闭</ly-button>
  </modal>
```

<ly-button @click="show3 = true">右滑出弹窗</ly-button>
<modal direction="right" v-model="show3" width="300px">
  <span>弹窗内容</span>
  <ly-button @click="show3 = false">关闭</ly-button>
</modal>

```html
  <ly-button @click="show3 = true">右滑出弹窗</ly-button>
  <modal direction="right" v-model="show3" width="300px">
    <span>弹窗内容</span>
    <ly-button @click="show3 = false">关闭</ly-button>
  </modal>
```

<ly-button @click="show4 = true">不显示遮罩</ly-button>
<modal direction="bottom" v-model="show4" height="300px" :show-mask="false">
  <span>弹窗内容</span>
  <ly-button @click="show4 = false">关闭</ly-button>
</modal>

```html
<ly-button @click="show4 = true">不显示遮罩</ly-button>
<modal direction="bottom" v-model="show4" height="300px" :show-mask="false">
  <span>弹窗内容</span>
  <ly-button @click="show4 = false">关闭</ly-button>
</modal>
```

<ly-button @click="show5 = true">中间弹出</ly-button>
<modal direction="center" v-model="show5" height="300px" width="300px" @on-show="onshow" @on-hide="onhide">
  <span>弹窗内容</span>
  <ly-button @click="show5 = false">关闭</ly-button>
</modal>

```html
<ly-button @click="show5 = true">中间弹出</ly-button>
<modal direction="center" v-model="show5" height="300px" width="300px">
  <span>弹窗内容</span>
  <ly-button @click="show5 = false">关闭</ly-button>
</modal>
```
