## checklist
### 基本用法
<group>
  <check-list :options="['啤酒', '饮料', '八宝粥']" v-model="selected"></check-list>
</group>
<div>{{selected}}</div>

<ul class="description">
  <li><code>options</code>复选数组对象（字符串数组/对象数组）</li>
  <li><code>v-model</code>双向绑定</li>
</ul>

```html
  <group>
    <check-list :options="['啤酒', '饮料', '八宝粥']" v-model="selected"></check-list>
  </group>
```

<group>
  <check-list
    :options="[{key: 'beer', value: '啤酒', icon: 'icon-user'},
    {key: 'drink', value: '饮料', icon: 'icon-password'},
    {key: 'zhou', value: '八宝粥', icon: 'icon-location'}]"
    v-model="selected1"
  ></check-list>
</group>
<div>{{selected1}}</div>

```html
  <group>
    <check-list
      :options="[{key: 'beer', value: '啤酒', icon: 'icon-user'},
      {key: 'drink', value: '饮料', icon: 'icon-password'},
      {key: 'zhou', value: '八宝粥', icon: 'icon-location'}]"
      v-model="selected1"
    ></check-list>
  </group>
```

### 圆圈样式
<group>
  <check-list
    :options="[{key: 0, value: '啤酒', icon: 'icon-user'},
    {key: 1, value: '饮料', icon: 'icon-password'},
    {key: 2, value: '八宝粥', icon: 'icon-location'}]"
    v-model="selected2"
    round
  ></check-list>
</group>
<div>{{selected2}}</div>

<ul class="description">
  <li><code>is-round</code>设置成圆圈样式</li>
</ul>

```html
  <group>
    <check-list
      :options="[{key: 0, value: '啤酒', icon: 'icon-user'},
      {key: 1, value: '饮料', icon: 'icon-password'},
      {key: 2, value: '八宝粥', icon: 'icon-location'}]"
      v-model="selected2"
      round
    ></check-list>
  </group>
```
### 限制最大选中个数
<group>
  <check-list :options="['啤酒', '饮料', '八宝粥', '瓜子']" v-model="selected" :max="2"></check-list>
</group>

<ul class="description">
  <li><code>max</code>限制最大选中个数（非1）</li>
</ul>

```html
<group>
  <check-list :options="['啤酒', '饮料', '八宝粥', '瓜子']" v-model="selected" :max="2"></check-list>
</group>
```




