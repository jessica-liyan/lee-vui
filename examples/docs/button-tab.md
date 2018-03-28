## button-tab
### 基本用法
<div style="margin:1rem;">
  <button-tab v-model="tabs" @on-change="handle">
    <button-tab-item @on-click="itemHandle">本天</button-tab-item>
    <button-tab-item @on-click="itemHandle">本周</button-tab-item>
    <button-tab-item @on-click="itemHandle">本月</button-tab-item>
  </button-tab>
  <div>{{tabs}}</div>
</div>

<div style="margin:1rem;">
  <button-tab v-model="tabs" @on-change="handle" round>
    <button-tab-item @on-click="itemHandle">本天</button-tab-item>
    <button-tab-item @on-click="itemHandle">本周</button-tab-item>
    <button-tab-item @on-click="itemHandle">本月</button-tab-item>
  </button-tab>
  <div v-if="tabs === 0">
    这是第1页内容
  </div>
  <div v-if="tabs === 1">
    这是第2页内容
  </div>
  <div v-if="tabs === 2">
    这是第3页内容
  </div>
</div>

<ul class="description">
  <li><code>v-model</code>双向绑定</li>
  <li><code>round</code>圆角样式</li>
  <li><code>on-click</code>监听每个item点击事件，参数是item索引</li>
  <li><code>on-change</code>监听整个tab值改变事件，参数是newVal,oldVal</li>
</ul>

```html
  <button-tab v-model="tabs" @on-change="handle">
    <button-tab-item @on-click="itemHandle">本天</button-tab-item>
    <button-tab-item @on-click="itemHandle">本周</button-tab-item>
    <button-tab-item @on-click="itemHandle">本月</button-tab-item>
  </button-tab>
```

```html
  <button-tab v-model="tabs" @on-change="handle" round>
    <button-tab-item @on-click="itemHandle">本天</button-tab-item>
    <button-tab-item @on-click="itemHandle">本周</button-tab-item>
    <button-tab-item @on-click="itemHandle">本月</button-tab-item>
  </button-tab>
  <div v-if="tabs === 0">
    这是第1页内容
  </div>
  <div v-if="tabs === 1">
    这是第2页内容
  </div>
  <div v-if="tabs === 2">
    这是第3页内容
  </div>
```




