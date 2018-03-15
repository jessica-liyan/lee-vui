## button 按钮
### 基本用法
<ly-button>搜索</ly-button>
<ly-button type="success">搜索</ly-button>
<ly-button type="info">搜索</ly-button>
<ly-button type="danger">搜索</ly-button>
<ul class="description">
  <li><code>type</code>primary/success/info/danger默认按钮</li>
</ul>

```html
  <ly-button>搜索</ly-button>
  <ly-button type="success">搜索</ly-button>
  <ly-button type="info">搜索</ly-button>
  <ly-button type="danger">搜索</ly-button>
```
### 线型按钮
<ly-button plain>搜索</ly-button>
<ly-button type="success" plain>搜索</ly-button>
<ly-button type="info" plain>搜索</ly-button>
<ly-button type="danger" plain>搜索</ly-button>
<ul class="description">
  <li><code>plain</code>true/false，朴素按钮</li>
</ul>

```html
  <ly-button plain>搜索</ly-button>
  <ly-button type="success" plain>搜索</ly-button>
  <ly-button type="info" plain>搜索</ly-button>
  <ly-button type="danger" plain>搜索</ly-button>
```

### 按钮大小
<ly-button size="medium">搜索</ly-button>
<ly-button size="small">搜索</ly-button>
<ly-button size="mini">搜索</ly-button>
<ly-button size="medium" plain>搜索</ly-button>
<ly-button size="small" plain>搜索</ly-button>
<ly-button size="mini" plain>搜索</ly-button>
<ul class="description">
  <li><code>size</code>medium/small/mini</li>
</ul>

```html
  <ly-button size="medium">搜索</ly-button>
  <ly-button size="small">搜索</ly-button>
  <ly-button size="mini">搜索</ly-button>
  <ly-button size="medium" plain>搜索</ly-button>
  <ly-button size="small" plain>搜索</ly-button>
  <ly-button size="mini" plain>搜索</ly-button>
```

### 圆角按钮
<ly-button round>搜索</ly-button>
<ly-button size="medium" round>搜索</ly-button>
<ly-button size="small" round>搜索</ly-button>
<ly-button size="mini" round>搜索</ly-button>
<ul class="description">
  <li><code>round</code>true/false，圆角按钮</li>
</ul>

```html
  <ly-button round>搜索</ly-button>
  <ly-button size="medium" round>搜索</ly-button>
  <ly-button size="small" round>搜索</ly-button>
  <ly-button size="mini" round>搜索</ly-button>
```

### 块级按钮
<ly-button block>搜索</ly-button>
<ly-button block plain>搜索</ly-button>
<ul class="description">
  <li><code>block</code>true/false，块级按钮</li>
</ul>

```html
  <ly-button block>搜索</ly-button>
  <ly-button block plain>搜索</ly-button>
```

### 原始
<ly-button nativeType="submit">搜索</ly-button>
<ul class="description">
  <li><code>nativeType</code>button/submit/reset</li>
</ul>

```html
  <ly-button nativeType="submit">搜索</ly-button>
```

### 字体按钮
<ly-button type="text">搜索</ly-button>
<ul class="description">
  <li><code>type="text"</code>字体按钮</li>
</ul>

```html
  <ly-button type="text">搜索</ly-button>
```

### 自定义类
<ly-button style="background:#F5F5F5;color:#333;border-color:#ccc;">搜索</ly-button>
<ul class="description">
  <li><code>class，style</code>添加类或者内联样式覆盖样式</li>
</ul>

```html
  <ly-button style="background:#F5F5F5;color:#333;border-color:#ccc;">搜索</ly-button>
```

### 禁用状态
<ly-button disabled>搜索</ly-button>
<ly-button disabled type="danger">搜索</ly-button>
<ly-button plain disabled>搜索</ly-button>
<ly-button plain disabled type="danger">搜索</ly-button>
<ul class="description">
  <li><code>disabled</code>true/false，禁用按钮</li>
</ul>

```html
  <ly-button disabled>搜索</ly-button>
  <ly-button disabled type="danger">搜索</ly-button>
  <ly-button plain disabled>搜索</ly-button>
  <ly-button plain disabled type="danger">搜索</ly-button>
```

### 渐变按钮
<ly-button block :gradient="['#1D62F0', '#19D5FD']">搜索</ly-button>
<ly-button block :gradient="['#6F1BFE', '#9479DF']">搜索</ly-button>
<ul class="description">
  <li><code>gradient</code>Array，两种颜色横向渐变</li>
</ul>

```html
  <ly-button block :gradient="['#1D62F0', '#19D5FD']">搜索</ly-button>
  <ly-button block :gradient="['#6F1BFE', '#9479DF']">搜索</ly-button>
```

### 点击事件
<ly-button @click.native="test">自定义点击事件</ly-button>
<ly-button @click.native="back">返回</ly-button>
<ul class="description">
  <li><code>@click.native</code>添加原生点击事件</li>
</ul>

```html
  <ly-button @click.native="test">自定义点击事件</ly-button>
  <ly-button @click.native="back">返回</ly-button>
```

