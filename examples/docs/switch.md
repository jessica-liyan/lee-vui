## switch
### 基本用法
<group>
  <ly-switch title="开启某个功能" v-model="isCheck"></ly-switch>
  <cell title="监控最新值(默认是true)" :value="isCheck + ''"></cell>
</group>

<ul class="description">
  <li><code>v-model</code>使用v-model传入默认值，同时获取子组件的值（双向绑定）</li>
</ul>

```html
  <group>
    <ly-switch title="开启某个功能" v-model="isCheck"></ly-switch>
    <cell title="监控最新值(默认是true)" :value="isCheck + ''"></cell>
  </group>
```

### 自定义title
<group>
  <ly-switch v-model="isCheck">
    <div slot="title" style="color:red;">自定义标题</div>
  </ly-switch>
  <ly-switch v-model="isCheck">
    <div slot="title" style="color:red;"><i class="iconfont icon-user"></i><span class="v-m">自定义标题</span></div>
  </ly-switch>
</group>

```html
  <group>
    <ly-switch v-model="isCheck">
      <div slot="title" style="color:red;">自定义标题</div>
    </ly-switch>
    <ly-switch v-model="isCheck">
      <div slot="title" style="color:red;"><i class="iconfont icon-user"></i>自定义标题</div>
    </ly-switch>
  </group>
```