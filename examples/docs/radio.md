## radio 单选按钮
### 基本用法
<group style="margin-bottom:1rem;">
  <radio :options="['支付宝', '微信', 'QQ钱包']"></radio>
</group>

<group style="margin-bottom:1rem;">
  <radio :options="[
    {key: 'alipay', value: '支付宝'},
    {key: 'wx', value: '微信'},
    {key: 'qq', value: 'QQ钱包'},
  ]"></radio>
</group>

<ul class="description">
  <li><code>options</code>单选数组对象</li>
</ul>

```html
  <group style="margin-bottom:1rem;">
    <radio :options="['支付宝', '微信', 'QQ钱包']"></radio>
  </group>

  <group>
    <radio :options="[
      {key: 'alipay', value: '支付宝'},
      {key: 'wx', value: '微信'},
      {key: 'qq', value: 'QQ钱包'},
    ]"></radio>
  </group>
```

### 设置初始默认值
<group>
  <radio :options="['支付宝', '微信', 'QQ钱包']" value="支付宝"></radio>
</group>

<ul class="description">
  <li><code>value</code>设置初始默认值</li>
</ul>

```html
  <group>
    <radio :options="['支付宝', '微信', 'QQ钱包']" value="支付宝"></radio>
  </group>
```

### 圆圈样式
<group>
  <radio
    circle
    value="alipay"
    :options="[
    {key: 'alipay', value: '支付宝'},
    {key: 'wx', value: '微信'},
    {key: 'qq', value: 'QQ钱包'},
  ]"></radio>
</group>
<ul class="description">
  <li><code>circle</code>按钮为圆圈样式</li>
</ul>

```html
<group>
  <radio
    circle
    value="alipay"
    :options="[
    {key: 'alipay', value: '支付宝'},
    {key: 'wx', value: '微信'},
    {key: 'qq', value: 'QQ钱包'},
  ]"></radio>
</group>
```

### 带icon
<group style="margin-bottom:1rem;">
  <radio
    circle
    value="user"
    :options="[
    {key: 'user', value: '用户名', icon: 'icon-user'},
    {key: 'password', value: '密码', icon: 'icon-password'},
    {key: 'location', value: '家庭地址', icon: 'icon-location'}
  ]"></radio>
</group>

<group>
  <radio
    circle
    value="alipay"
    :options="[
    {key: 'alipay', value: '支付宝', icon: './static/img/alipay.png'},
    {key: 'wx', value: '微信', icon: './static/img/wx.png'},
    {key: 'qq', value: 'QQ钱包', icon: './static/img/QQ.png'},
  ]"></radio>
</group>

```html
  <group style="margin-bottom:1rem;">
    <radio
      circle
      value="user"
      :options="[
      {key: 'user', value: '用户名', icon: 'icon-user'},
      {key: 'password', value: '密码', icon: 'icon-password'},
      {key: 'location', value: '家庭地址', icon: 'icon-location'}
    ]"></radio>
  </group>

  <group>
    <radio
      circle
      value="alipay"
      :options="[
      {key: 'alipay', value: '支付宝', icon: './static/img/alipay.png'},
      {key: 'wx', value: '微信', icon: './static/img/wx.png'},
      {key: 'qq', value: 'QQ钱包', icon: './static/img/QQ.png'},
    ]"></radio>
  </group>
```


### 监听input事件
<div style="margin:10px">当前选中值：{{chosen}}</div>
<group>
  <radio :options="['支付宝', '微信', 'QQ钱包']" @input="input" v-model="chosen"></radio>
</group>
<ul class="description">
  <li><code>v-model</code>直接用v-model获取当前最新值</li>
  <li><code>@input</code>通过input事件监听原生input的focus事件</li>
</ul>

```html
  <group>
    <radio :options="['支付宝', '微信', 'QQ钱包']" @input="input"></radio>
  </group>
```

