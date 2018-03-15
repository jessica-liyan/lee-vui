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

### 自定义标题，自定义icon
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
<ul class="description">
  <li><code>slot="title"</code>插入自定义标题</li>
  <li><code>slot="icon"</code>插入图标（图片或iconfont）</li>
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
  <cell title="标题一" is-link @click.native="show = !show"></cell>
  <template v-if="show">
    <cell title="副标题一" is-link></cell>
    <cell title="副标题二" is-link></cell>
    <cell title="副标题三" is-link></cell>
  </template>
  <cell title="标题二" is-link></cell>
  <cell title="标题三" is-link></cell>
</group>

