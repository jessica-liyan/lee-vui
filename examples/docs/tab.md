## tab
### 基本用法
<tab v-model="tabs" @on-change="handle">
  <tab-item @on-click="itemHandle">已发货</tab-item>
  <tab-item @on-click="itemHandle">未发货</tab-item>
  <tab-item @on-click="itemHandle">全部订单</tab-item>
</tab>
<div>{{tabs}}</div>

<ul class="description">
  <li><code>v-model</code>双向绑定</li>
  <li><code>on-click</code>监听每个item点击事件，参数是item索引</li>
  <li><code>on-change</code>监听整个tab值改变事件，参数是newVal,oldVal</li>
</ul>

```html
  <tab v-model="tabs" @on-change="handle">
    <tab-item @on-click="itemHandle">已发货</tab-item>
    <tab-item @on-click="itemHandle">未发货</tab-item>
    <tab-item @on-click="itemHandle">全部订单</tab-item>
  </tab>
```

### 定义滚动线条的宽度和高度
<tab v-model="tabs" bar-width="40px" bar-height="3px">
  <tab-item>已发货</tab-item>
  <tab-item>未发货</tab-item>
  <tab-item>全部订单</tab-item>
</tab>

<tab v-model="tabs" :bar-width="getWidth" bar-height="3px">
  <tab-item>已发货</tab-item>
  <tab-item>未发货</tab-item>
  <tab-item>全部订单</tab-item>
</tab>

<ul class="description">
  <li><code>bar-width</code>function/string，function参数是每个索引值</li>
  <li><code>bar-height</code>string</li>
</ul>

```html
  <tab v-model="tabs" bar-width="40px" bar-height="3px">
    <tab-item>已发货</tab-item>
    <tab-item>未发货</tab-item>
    <tab-item>全部订单</tab-item>
  </tab>

  <tab v-model="tabs" :bar-width="getWidth" bar-height="3px">
    <tab-item>已发货</tab-item>
    <tab-item>未发货</tab-item>
    <tab-item>全部订单</tab-item>
  </tab>
```

### 设置默认颜色和激活颜色
<tab v-model="tabs" default-color="#999" active-color="#ff6666">
  <tab-item>已发货</tab-item>
  <tab-item>未发货</tab-item>
  <tab-item>全部订单</tab-item>
</tab>

<ul class="description">
  <li><code>default-color</code>默认字体颜色</li>
  <li><code>active-color</code>选中字体颜色</li>
</ul>

```html
  <tab v-model="tabs" default-color="#999" active-color="#ff6666">
    <tab-item>已发货</tab-item>
    <tab-item>未发货</tab-item>
    <tab-item>全部订单</tab-item>
  </tab>
```

### 滚动tab
<tab scrollable :scroll-threshold="4">
  <tab-item>已发货</tab-item>
  <tab-item>未发货</tab-item>
  <tab-item>全部订单</tab-item>
  <tab-item>已发货1</tab-item>
  <tab-item>已发货2</tab-item>
  <tab-item>已发货3</tab-item>
  <tab-item>已发货4</tab-item>
</tab>

<ul class="description">
  <li><code></code>待完善</li>
</ul>

