## selector
### 基本用法
<group>
  <cell>
    <selector name="selector1" title="居住城市" v-model="empty" placeholder="请选择居住城市" :options="[{key: 'bj', value: '北京'}, {key: 'sh', value: '上海'}, {key: 'sz', value: '深圳'}]"></selector>
  </cell>
  <cell title="value预定空值">{{empty}}</cell>
  <cell>
    <selector name="selector2" title="居住城市" v-model="selected7" :options="[{key: 'bj', value: '北京'}, {key: 'sh', value: '上海'}, {key: 'sz', value: '深圳'}]"></selector>
  </cell>
  <cell title="value:Object">{{selected7}}</cell>
  <cell>
    <selector name="selector3" title="居住城市" v-model="selected3" :options="[{key: 'bj', value: '北京'}, {key: 'sh', value: '上海'}, {key: 'sz', value: '深圳'}]"></selector>
  </cell>
  <cell title="value:String">{{selected3}}</cell>
  <cell>
    <selector name="selector4" title="居住城市" v-model="show" :options="[{key: true, value: '是'}, {key: false, value: '否'}]"></selector>
  </cell>
  <cell title="value:Boolean">{{show}}</cell>
</group>

<ul class="description">
  <li><code>name</code>select的名称name</li>
  <li><code>title</code>label</li>
  <li><code>placeholder</code>placeholder</li>
  <li><code>v-model</code>string/number/object/boolean</li>
  <li><code>options</code>array[{key: key, value: value}]</li>
</ul>

```html
<group>
  <cell>
    <selector name="selector1" title="居住城市" v-model="empty" placeholder="请选择居住城市" :options="[{key: 'bj', value: '北京'}, {key: 'sh', value: '上海'}, {key: 'sz', value: '深圳'}]"></selector>
  </cell>
  <cell>
    <selector name="selector2" title="居住城市" v-model="selected7" :options="[{key: 'bj', value: '北京'}, {key: 'sh', value: '上海'}, {key: 'sz', value: '深圳'}]"></selector>
  </cell>
  <cell>
    <selector name="selector3" title="居住城市" v-model="selected3" :options="[{key: 'bj', value: '北京'}, {key: 'sh', value: '上海'}, {key: 'sz', value: '深圳'}]"></selector>
  </cell>
  <cell>
    <selector name="selector4" title="居住城市" v-model="show" :options="[{key: true, value: '是'}, {key: false, value: '否'}]"></selector>
  </cell>
</group>
```

### 监听事件
<group>
  <cell>
    <selector name="selector1"
      title="居住城市"
      v-model="empty"
      placeholder="请选择居住城市"
      :options="[{key: 'bj', value: '北京'}, {key: 'sh', value: '上海'}, {key: 'sz', value: '深圳'}]"
      @on-change="itemHandle"
    ></selector>
  </cell>
</group>

<ul class="description">
  <li><code>on-change</code>监听select值改变事件</li>
</ul>

```html
  <cell>
    <selector name="selector1"
      title="居住城市"
      v-model="empty"
      placeholder="请选择居住城市"
      :options="[{key: 'bj', value: '北京'}, {key: 'sh', value: '上海'}, {key: 'sz', value: '深圳'}]"
      @on-change="itemHandle"
    ></selector>
  </cell>
```

