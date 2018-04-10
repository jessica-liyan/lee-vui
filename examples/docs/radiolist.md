## radio 单选按钮
### 基本用法
<group>
  <radio-list :options="['支付宝', '微信', 'QQ钱包']" v-model="radio"></radio-list>
</group>
<div>{{radio}}</div>

<ul class="description">
  <li><code>options</code>单选数组对象（字符串数组/对象数组）</li>
  <li><code>v-model</code>双向绑定</li>
</ul>

```html
  <group>
    <radio-list :options="['支付宝', '微信', 'QQ钱包']" v-model="radio"></radio-list>
  </group>
```

<group>
  <radio-list 
    :options="[
    {key: 'alipay', value: '支付宝'},
    {key: 'wx', value: '微信'},
    {key: 'qq', value: 'QQ钱包'}]"
    v-model="radio1"
  ></radio-list>
</group>
<div>{{radio1}}</div>

```html
  <group>
    <radio-list 
      :options="[
      {key: 'alipay', value: '支付宝'},
      {key: 'wx', value: '微信'},
      {key: 'qq', value: 'QQ钱包'}]"
      v-model="radio1"
    ></radio-list>
  </group>
```

### 圆圈样式
<group>
  <radio-list :options="['支付宝', '微信', 'QQ钱包']" v-model="radio" round></radio-list>
</group>
<ul class="description">
  <li><code>round</code>按钮为圆圈样式</li>
</ul>

```html
<group>
  <radio-list :options="['支付宝', '微信', 'QQ钱包']" v-model="radio" round></radio-list>
</group>
```

### 带icon
<group style="margin-bottom:1rem;">
  <radio-list
    :options="[
    {key: 'user', value: '用户名', icon: 'user'},
    {key: 'password', value: '密码', icon: 'password'},
    {key: 'location', value: '家庭地址', icon: 'location'}]"
    round
  ></radio-list>
</group>

<group>
  <radio-list
    :options="[
    {key: 'alipay', value: '支付宝', iconImg: './static/img/alipay.png'},
    {key: 'wx', value: '微信', iconImg: './static/img/wx.png'},
    {key: 'qq', value: 'QQ钱包', iconImg: './static/img/qq.png'}]"
    round
  ></radio-list>
</group>

```html
  <group style="margin-bottom:1rem;">
    <radio-list
      :options="[
      {key: 'user', value: '用户名', icon: 'user'},
      {key: 'password', value: '密码', icon: 'password'},
      {key: 'location', value: '家庭地址', icon: 'location'}]"
      round
    ></radio-list>
  </group>

  <group>
    <radio-list
      :options="[
      {key: 'alipay', value: '支付宝', iconImg: './static/img/alipay.png'},
      {key: 'wx', value: '微信', iconImg: './static/img/wx.png'},
      {key: 'qq', value: 'QQ钱包', iconImg: './static/img/qq.png'}]"
      round
    ></radio-list>
  </group>
```

### 监听input事件
<div style="margin:10px">当前选中值：{{radio}}</div>
<group>
  <radio-list :options="['支付宝', '微信', 'QQ钱包']" @input="input" v-model="radio"></radio-list>
</group>
<ul class="description">
  <li><code>@input</code>通过input事件监听原生input的focus事件</li>
</ul>

```html
  <group>
    <radio-list :options="['支付宝', '微信', 'QQ钱包']" @input="input" v-model="radio"></radio-list>
  </group>
```

