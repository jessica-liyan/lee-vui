## checker
### 基本用法（单选）
<checker type="radio" v-model="selected3">
  <checker-item value="bj">北京</checker-item>
  <checker-item value="sh">上海</checker-item>
  <checker-item value="gz">广州</checker-item>
  <checker-item value="sz">深圳</checker-item>
</checker>
<div>{{selected3}}</div>

```html
  <checker type="radio" v-model="selected3">
    <checker-item value="bj">北京</checker-item>
    <checker-item value="sh">上海</checker-item>
    <checker-item value="gz">广州</checker-item>
    <checker-item value="sz">深圳</checker-item>
  </checker>
```

<checker type="radio" v-model="selected7">
  <checker-item v-for="(item, index) in selected5" :value="item" :key="item.key">{{item.value}}</checker-item>
</checker>
<div>{{selected7}}</div>

```html
  <checker type="radio" v-model="selected7">
    <checker-item v-for="(item, index) in selected5" :value="item" :key="item.key">{{item.value}}</checker-item>
  </checker>
```
<ul class="description">
  <li><code>type</code>radio</li>
  <li><code>v-model</code>双向绑定（string/number/object）</li>
  <li><code>value</code>checker-item（string/number/object）</li>
</ul>

### 基本用法（多选）
<checker type="checkbox" v-model="selected4">
  <checker-item value="bj">北京</checker-item>
  <checker-item value="sh">上海</checker-item>
  <checker-item value="gz">广州</checker-item>
  <checker-item value="sz">深圳</checker-item>
</checker>
<div>{{selected4}}</div>

```html
  <checker type="checkbox" v-model="selected4">
    <checker-item value="bj">北京</checker-item>
    <checker-item value="sh">上海</checker-item>
    <checker-item value="gz">广州</checker-item>
    <checker-item value="sz">深圳</checker-item>
  </checker>
```

<checker type="checkbox" v-model="selected8">
  <checker-item v-for="(item, index) in selected5" :value="item" :key="item.key">{{item.value}}</checker-item>
</checker>
<div>{{selected8}}</div>

```html
  <checker type="checkbox" v-model="selected8">
    <checker-item v-for="(item, index) in selected5" :value="item" :key="item.key">{{item.value}}</checker-item>
  </checker>
```

<ul class="description">
  <li><code>type</code>checkbox</li>
  <li><code>v-model</code>双向绑定（array字符串数组/对象数组）</li>
  <li><code>value</code>checker-item（string/number/object）</li>
</ul>

### 自定义样式
<checker type="radio" v-model="selected7" default-item-class="defaultClass" selected-item-class="selectedClass">
  <checker-item v-for="(item, index) in selected5" :value="item" :key="item.key">{{item.value}}</checker-item>
</checker>
<div>{{selected7}}</div>

```html
  <checker type="radio" v-model="selected7" default-item-class="defaultClass" selected-item-class="selectedClass">
    <checker-item v-for="(item, index) in selected5" :value="item" :key="item.key">{{item.value}}</checker-item>
  </checker>
```

<ul class="description">
  <li><code>default-item-class</code>自定义checker-item默认样式</li>
  <li><code>selected-item-class</code>自定义checker-item选中样式</li>
</ul>

### 限制最多选择个数
<checker type="checkbox" v-model="selected8" :max="2">
  <checker-item v-for="(item, index) in selected5" :value="item" :key="item.key">{{item.value}}</checker-item>
</checker>
<div>{{selected8}}</div>

<ul class="description">
  <li><code>max</code>限制最多选择个数</li>
</ul>

```html
  <checker type="checkbox" v-model="selected8" :max="2">
    <checker-item v-for="(item, index) in selected5" :value="item" :key="item.key">{{item.value}}</checker-item>
  </checker>
```
