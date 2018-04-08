## toast
### 基本用法
<ly-button @click.native="show = true">bottom</ly-button>
<span>{{show}}</span>
<toast v-model="show" text="消息已经成功发送至手机！" position="bottom" :duration="3000"></toast>

```html
<toast v-model="show"
  text="消息已经成功发送至手机！"
  :duration="3000"
></toast>
```

<ly-button @click.native="show1 = true">top</ly-button>
<span>{{show1}}</span>
<toast v-model="show1" text="消息已经成功发送至手机！" position="top" :duration="2000"></toast>

```html
<toast v-model="show1"
  text="消息已经成功发送至手机！"
  position="top"
  :duration="2000"
></toast>
```

<ly-button @click.native="show2 = true">middle</ly-button>
<span>{{show2}}</span>
<toast v-model="show2" text="正在登录" position="middle" :duration="2000" @on-show="onshow" @on-hide="onhide"></toast>

```html
<toast v-model="show2"
  text="正在登录"
  position="middle"
  :duration="2000"
  @on-show="onshow"
  @on-hide="onhide"
></toast>
```

<ul class="description">
  <li><code>v-model</code>双向绑定</li>
  <li><code>text</code>提示内容</li>
  <li><code>duration</code>延迟时间（ms）</li>
  <li><code>position</code>top/bottom/middle，提示框的位置，默认是bottom</li>
  <li><code>on-show</code>监听toast打开事件</li>
  <li><code>on-hide</code>监听toast关闭事件</li>
</ul>

### 自定义提示内容
<ly-button @click.native="show3 = true">middle</ly-button>
<span>{{show3}}</span>
<toast v-model="show3" position="middle" :duration="2000">
  <img src="../../static/img/alipay.png"/>
  <span style="display:block;">这是自定义内容</span>
</toast>

```html
<toast v-model="show3" position="middle" :duration="2000">
  <img src="../../static/img/alipay.png"/>
  <span style="display:block;">这是自定义内容</span>
</toast>
```

### 插件形式调用
<ly-button @click.native="usePlugin">插件调用</ly-button>

```js
usePlugin () {
  this.$toast.show({
    text: '这是一个插件中的内容',
    duration: 4000,
    position: 'bottom',
    onShow: function () {
      console.log('plugin onshow')
    },
    onHide: function () {
      console.log('plugin onhide')
    }
  })
}
```




