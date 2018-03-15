## cell
### 基本用法
<group>
  <cell title="label标题" value="23.00"></cell>
  <cell title="label标题" value="13125157002"></cell>
  <cell title="添加is-link变成点击对象" @click.native="back" is-link></cell>
</group>

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

