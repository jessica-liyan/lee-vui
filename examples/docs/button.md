## button 按钮
### 基本用法
<ly-button>搜索</ly-button>
<ly-button type="success">搜索</ly-button>
<ly-button type="info">搜索</ly-button>
<ly-button type="danger">搜索</ly-button>
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
```html
  <ly-button round>搜索</ly-button>
  <ly-button size="medium" round>搜索</ly-button>
  <ly-button size="small" round>搜索</ly-button>
  <ly-button size="mini" round>搜索</ly-button>
```

### 块级按钮
<ly-button block>搜索</ly-button>
<ly-button block plain>搜索</ly-button>
```html
  <ly-button block>搜索</ly-button>
  <ly-button block plain>搜索</ly-button>
```

### 原始type=button/submit/reset
<ly-button nativeType="submit">搜索</ly-button>
```html
  <ly-button nativeType="submit">搜索</ly-button>
```

### 字体按钮
<ly-button type="text">搜索</ly-button>
```html
  <ly-button type="text">搜索</ly-button>
```

### 自定义类
<ly-button class="btn">搜索</ly-button>
```html
  <ly-button class="btn">搜索</ly-button>
```

### 禁用状态
<ly-button disabled>搜索</ly-button>
<ly-button disabled type="danger">搜索</ly-button>
<ly-button plain disabled>搜索</ly-button>
<ly-button plain disabled type="danger">搜索</ly-button>
```html
  <ly-button disabled>搜索</ly-button>
  <ly-button disabled type="danger">搜索</ly-button>
  <ly-button plain disabled>搜索</ly-button>
  <ly-button plain disabled type="danger">搜索</ly-button>
```

### 渐变按钮
<ly-button block :gradient="['#1D62F0', '#19D5FD']">搜索</ly-button>
<ly-button block :gradient="['#6F1BFE', '#9479DF']">搜索</ly-button>
```html
  <ly-button block :gradient="['#1D62F0', '#19D5FD']">搜索</ly-button>
  <ly-button block :gradient="['#6F1BFE', '#9479DF']">搜索</ly-button>
```

### 点击事件
<ly-button @click.native="test">自定义点击事件</ly-button>
<ly-button @click.native="back">返回</ly-button>
```html
  <ly-button @click.native="test">自定义点击事件</ly-button>
  <ly-button @click.native="back">返回</ly-button>
```

