## cell
### 基本用法
<group>
  <cell title="label标题" value="23.00"></cell>
  <cell title="label标题" value="13125157002"></cell>
  <cell title="添加is-link变成点击对象" @click.native="back" is-link></cell>
</group>
<ul class="description">
  <li><code>title</code>标题，label</li>
  <li><code>value</code>标题对应的值</li>
  <li><code>is-link</code>转变成可点击的链接，添加点击事件</li> 
</ul>

```html
  <group>
    <cell title="label标题" value="23.00"></cell>
    <cell title="label标题" value="13125157002"></cell>
    <cell
      title="添加is-link变成点击对象" 
      @click.native="back"
      is-link></cell>
  </group>
```
### 边线无间隙
<group>
  <cell title="label标题" value="23.00" border-full></cell>
  <cell title="label标题" value="13125157002" border-full></cell>
  <cell title="添加is-link变成点击对象" @click.native="back" is-link border-full></cell>
</group>
<ul class="description">
  <li><code>border-full</code>边线无间隙样式</li>
</ul>

```html
<group>
  <cell title="label标题" value="23.00" border-full></cell>
  <cell title="label标题" value="13125157002" border-full></cell>
  <cell title="添加is-link变成点击对象" @click.native="back" is-link border-full></cell>
</group>
```


### 自定义标题，自定义icon，自定义值
<group>
  <cell value="23.00">
    <span slot="title">自定义标题</span>
  </cell>
  <cell value="13125157002" is-link>
    <span slot="title">自定义标题，有链接</span>
  </cell>
  <cell value="未办结" is-link>
    <span slot="title">插入icon图片</span>
    <img slot="icon" src="../assets/user.png" width="20" style="margin-right:10px;"/>
  </cell>
  <cell value="办结" is-link>
    <span slot="title">插入iconfont图标</span>
    <i class="iconfont icon-user" slot="icon" style="font-size:18px;color:#999;margin-right:10px;"></i>
  </cell>
  <cell title="通知">
    <div style="color:#f00;">已开启（自定义数值）</div>
  </cell>
</group>
<ul class="description">
  <li><code>slot="title"</code>插入自定义标题</li>
  <li><code>slot="icon"</code>插入图标（图片或iconfont）</li>
  <li><code>slot="default"</code>不具名slot，默认为自定义数值</li>
</ul>

```html
<group>
  <cell value="23.00">
    <span slot="title">自定义标题</span>
  </cell>
  <cell value="13125157002" is-link>
    <span slot="title">自定义标题，有链接</span>
  </cell>
  <cell value="未办结" is-link>
    <span slot="title">插入icon图片</span>
    <img slot="icon" src="../assets/user.png" width="20" style="margin-right:10px;"/>
  </cell>
  <cell value="办结" is-link>
    <span slot="title">插入iconfont图标</span>
    <i class="iconfont icon-user" slot="icon" style="font-size:18px;color:#999;margin-right:10px;"></i>
  </cell>
</group>
```

### 对齐方式
<group label-width="9em" label-align="right" label-margin-right="1em">
  <cell title="默认是center" value="short"></cell>
  </cell>
  <cell title="长文字段落" value="vux并不完全依赖于WeUI，但是尽量保持整体UI样式接近WeUI的设计规范。最初目标是创建一个易用，实用，美观的移动端UI组件库。" align-items="flex-start" value-align="left">
  </cell>
</group>
<ul class="description">
  <li><code>align-items</code>flex-start/center/flex-end 标题垂直对齐方式</li>
  <li><code>value-align</code>left/center/right 数值水平对齐方式</li>
</ul>

```html
  <group label-width="9em" label-align="right" label-margin-right="1em">
    <cell
      title="默认是center"
      value="short">
    </cell>
    <cell
      title="长文字段落"
      value="vux并不完全依赖于WeUI，但是尽量保持整体UI样式接近WeUI的设计规范。最初目标是创建一个易用，实用，美观的移动端UI组件库。"
      align-items="flex-start"
      value-align="left">
    </cell>
  </group>
```

### 折叠
<group>
  <cell title="标题一"
    is-link
    :arrow="show ? 'up': 'down'"
    @click.native="show = !show"
  ></cell>
  <div class="slide" :class="show ? 'animate': ''">
    <div style="padding-left:15px;font-size:14px;line-height:2;">vux并不完全依赖于WeUI，但是尽量保持整体UI样式接近WeUI的设计规范。最初目标是创建一个易用，实用，美观的移动端UI组件库。</div>
  </div>
  <cell title="标题二" 
    is-link
    :arrow="show1 ? 'up': 'down'"
    @click.native="show1 = !show1"
  ></cell>
  <div class="slide" :class="show1 ? 'animate': ''">
    <div style="padding-left:15px;font-size:14px;line-height:2;">vux并不完全依赖于WeUI，但是尽量保持整体UI样式接近WeUI的设计规范。最初目标是创建一个易用，实用，美观的移动端UI组件库。</div>
    <div style="padding-left:15px;font-size:14px;line-height:2;">vux并不完全依赖于WeUI，但是尽量保持整体UI样式接近WeUI的设计规范。最初目标是创建一个易用，实用，美观的移动端UI组件库。</div>
    <div style="padding-left:15px;font-size:14px;line-height:2;">vux并不完全依赖于WeUI，但是尽量保持整体UI样式接近WeUI的设计规范。最初目标是创建一个易用，实用，美观的移动端UI组件库。</div>
  </div>
</group>

<ul class="description">
  <li><code>slide  animate</code>动画效果</li>
</ul>

```html
<group>
  <cell title="标题一"
    is-link
    :arrow="show ? 'up': 'down'"
    @click.native="show = !show"
  ></cell>
  <div class="slide" :class="show ? 'animate': ''">
    <div style="padding-left:15px;font-size:14px;line-height:2;">vux并不完全依赖于WeUI，但是尽量保持整体UI样式接近WeUI的设计规范。最初目标是创建一个易用，实用，美观的移动端UI组件库。</div>
  </div>
  <cell title="标题二" 
    is-link
    :arrow="show1 ? 'up': 'down'"
    @click.native="show1 = !show1"
  ></cell>
  <div class="slide" :class="show1 ? 'animate': ''">
    <div style="padding-left:15px;font-size:14px;line-height:2;">vux并不完全依赖于WeUI，但是尽量保持整体UI样式接近WeUI的设计规范。最初目标是创建一个易用，实用，美观的移动端UI组件库。</div>
    <div style="padding-left:15px;font-size:14px;line-height:2;">vux并不完全依赖于WeUI，但是尽量保持整体UI样式接近WeUI的设计规范。最初目标是创建一个易用，实用，美观的移动端UI组件库。</div>
    <div style="padding-left:15px;font-size:14px;line-height:2;">vux并不完全依赖于WeUI，但是尽量保持整体UI样式接近WeUI的设计规范。最初目标是创建一个易用，实用，美观的移动端UI组件库。</div>
  </div>
</group>
```

### 设置标题描述
<group>
  <cell title="地址" 
    title-desc="湖北省武汉市江夏区高新四路"
    is-link
    @click.native="test"
  >
    <i class="iconfont icon-location" slot="icon" style="font-size:18px;color:#999;margin-right:10px;"></i>
  </cell>
</group>

<ul class="description">
  <li><code>title-desc</code>添加标题描述文字</li>
</ul>

```html
<group>
  <cell title="地址" 
    title-desc="湖北省武汉市江夏区高新四路"
    is-link
    @click.native="test"
  >
    <i class="iconfont icon-location" slot="icon" style="font-size:18px;color:#999;margin-right:10px;"></i>
  </cell>
</group>
```
