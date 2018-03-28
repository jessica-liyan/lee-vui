## layout
### 基本用法
<flex style="margin-bottom:1rem;">
  <flex-item><div :style="itemStyle">模块</div></flex-item>
  <flex-item><div :style="itemStyle">模块</div></flex-item>
</flex>

<flex :gutter="5" style="margin-bottom:1rem;">
  <flex-item><div :style="itemStyle">模块</div></flex-item>
  <flex-item><div :style="itemStyle">模块</div></flex-item>
</flex>

<flex :gutter="3">
  <flex-item><div :style="itemStyle">模块</div></flex-item>
  <flex-item><div :style="itemStyle">模块</div></flex-item>
  <flex-item><div :style="itemStyle">模块</div></flex-item>
</flex>

<ul class="description">
  <li><code>gutter</code>间隙像素大小（px）</li>
</ul>

```html
  <flex style="margin-bottom:1rem;">
    <flex-item><div :style="itemStyle">模块</div></flex-item>
    <flex-item><div :style="itemStyle">模块</div></flex-item>
  </flex>

  <flex :gutter="5" style="margin-bottom:1rem;">
    <flex-item><div :style="itemStyle">模块</div></flex-item>
    <flex-item><div :style="itemStyle">模块</div></flex-item>
  </flex>

  <flex :gutter="3">
    <flex-item><div :style="itemStyle">模块</div></flex-item>
    <flex-item><div :style="itemStyle">模块</div></flex-item>
    <flex-item><div :style="itemStyle">模块</div></flex-item>
  </flex>
```

### 24格
<flex :gutter="5" style="margin-bottom:1rem;">
  <flex-item :span="1"><div :style="itemStyle">模块</div></flex-item>
  <flex-item :span="2"><div :style="itemStyle">模块</div></flex-item>
</flex>
<flex :gutter="5" style="margin-bottom:1rem;">
  <flex-item :span="2"><div :style="itemStyle">模块</div></flex-item>
  <flex-item :span="3"><div :style="itemStyle">模块</div></flex-item>
</flex>
<flex :gutter="5" style="margin-bottom:1rem;">
  <flex-item :span="1"><div :style="itemStyle">模块</div></flex-item>
  <flex-item :span="2"><div :style="itemStyle">模块</div></flex-item>
  <flex-item :span="3"><div :style="itemStyle">模块</div></flex-item>
</flex>

<ul class="description">
  <li><code>span</code>每块所占的flex</li>
</ul>

```html
  <flex :gutter="5" style="margin-bottom:1rem;">
    <flex-item :span="1"><div :style="itemStyle">模块</div></flex-item>
    <flex-item :span="2"><div :style="itemStyle">模块</div></flex-item>
  </flex>
  <flex :gutter="5" style="margin-bottom:1rem;">
    <flex-item :span="2"><div :style="itemStyle">模块</div></flex-item>
    <flex-item :span="3"><div :style="itemStyle">模块</div></flex-item>
  </flex>
  <flex :gutter="5" style="margin-bottom:1rem;">
    <flex-item :span="1"><div :style="itemStyle">模块</div></flex-item>
    <flex-item :span="2"><div :style="itemStyle">模块</div></flex-item>
    <flex-item :span="3"><div :style="itemStyle">模块</div></flex-item>
  </flex>
```

### 水平和垂直对齐方式
<flex :gutter="5" align="center" justify="space-between">
  <flex-item :span="1/4"><span>左边</span></flex-item>
  <flex-item :span="1/4"><span>中间</span></flex-item>
  <flex-item :span="1/4"><span>右边</span></flex-item>
</flex>

<flex :gutter="5" align="center" justify="flex-end">
  <flex-item :span="1/4"><span>左边</span></flex-item>
  <flex-item :span="1/4"><span>中间</span></flex-item>
  <flex-item :span="1/4"><span>右边</span></flex-item>
</flex>

<ul class="description">
  <li><code>align</code>垂直对齐方式</li>
  <li><code>justify</code>水平对齐方式</li>
</ul>

```html
  <flex :gutter="5" align="center" justify="space-between">
    <flex-item :span="1/4"><span>左边</span></flex-item>
    <flex-item :span="1/4"><span>中间</span></flex-item>
    <flex-item :span="1/4"><span>右边</span></flex-item>
  </flex>

  <flex :gutter="5" align="center" justify="flex-end">
    <flex-item :span="1/4"><span>左边</span></flex-item>
    <flex-item :span="1/4"><span>中间</span></flex-item>
    <flex-item :span="1/4"><span>右边</span></flex-item>
  </flex>
```


### 换行
<flex :gutter="5" wrap>
  <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
  <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
  <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
  <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
  <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
  <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
</flex>
<ul class="description">
  <li><code>wrap</code>flex-wrap:wrap</li>
  <li><code>span</code>flex-basis</li>
</ul>

```html
  <flex :gutter="5" wrap>
    <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
    <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
    <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
    <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
    <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
    <flex-item :span="1/4"><div :style="itemStyle">模块</div></flex-item>
  </flex>
```








