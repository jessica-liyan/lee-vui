## group
### 基本用法
<ul class="description">
  <li><code>label-width</code>左侧label的固定宽度</li>
  <li><code>label-align</code>左侧label的水平对齐方式，默认left</li>
  <li><code>label-margin-right</code>左侧label的margin-right</li> 
</ul>
<group label-width="12em"
  label-margin-right="1em" 
  style="margin-bottom:1rem;"
>
  <cell title="标题左对齐" value="short"></cell>
  </cell>
</group>
<group label-width="12em" 
  label-align="right" 
  label-margin-right="1em"
  style="margin-bottom:1rem;"
>
  <cell title="标题右对齐" value="short"></cell>
  </cell>
</group>
<group label-width="12em" 
  label-align="right" 
  label-margin-right="1em"
  style="margin-bottom:2rem;"
>
  <cell title="标题右对齐，value左对齐" 
    value="short"
    value-align="left"
  ></cell>
  </cell>
</group>

```html
  <group label-width="12em"
    label-margin-right="1em" 
    style="margin-bottom:1rem;"
  >
    <cell title="标题左对齐" value="short"></cell>
    </cell>
  </group>
  <group label-width="12em" 
    label-align="right" 
    label-margin-right="1em"
    style="margin-bottom:1rem;"
  >
    <cell title="标题右对齐" value="short"></cell>
    </cell>
  </group>
  <group label-width="12em" 
    label-align="right" 
    label-margin-right="1em"
    style="margin-bottom:2rem;"
  >
    <cell title="标题右对齐，value左对齐" 
      value="short"
      value-align="left"
    ></cell>
    </cell>
  </group>
```