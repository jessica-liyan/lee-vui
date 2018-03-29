## input
### 基本用法
<group>
  <cell>
    <ly-input title="用户名" placeholder="默认左对齐" :label-width="5"></ly-input>
  </cell>
  <cell>
    <ly-input title="用户名" placeholder="设置input文字右对齐" :label-width="5" label-align="left" value-align="right"></ly-input>
  </cell>
  <cell>
    <ly-input title="联系方式" placeholder="type=tel" type="tel"></ly-input>
  </cell>
  <cell>
    <ly-input title="昵称" placeholder="双向绑定" v-model="inputval"></ly-input>
  </cell>
  <cell title="显示最新值">
    <span>{{inputval}}</span>
  </cell>
  <cell>
    <ly-input title="disabled" placeholder="请输入昵称" :label-width="8" v-model="inputval" disabled></ly-input>
  </cell>
  <cell>
    <ly-input title="readonly" placeholder="请输入昵称" :label-width="8" v-model="inputval" readonly></ly-input>
  </cell>
  <cell>
    <ly-input title="不显示清除功能" placeholder="请输入昵称" :label-width="8" v-model="inputval" :show-clear="false"></ly-input>
  </cell>
</group>

<ul class="description">
  <li><code>v-model</code>双向绑定</li>
  <li><code>title</code>label显示名称</li>
  <li><code>placeholder</code>input placeholder</li>
  <li><code>label-width</code>左侧label的固定宽度(单位em)</li>
  <li><code>label-align</code>左侧label的水平对齐方式，默认left</li>
  <li><code>value-align</code>左侧value的水平对齐方式，默认left</li>
  <li><code>type</code>number/text/email/tel/password</li> 
  <li><code>show-clear</code>是否显示清除功能，默认显示</li> 
  <li><code>disabled</code>是否禁用</li>  
  <li><code>readonly</code>是否readonly</li> 
</ul>

### icon
<group>
  <cell>
    <ly-input icon="icon-user" title="用户名" :label-width="4">
    </ly-input>
  </cell>
  <cell>
    <ly-input icon="icon-password" title="密码" :label-width="4" type="password">
    </ly-input>
  </cell>
  <cell>
    <ly-input iconImg="./static/img/alipay.png" title="支付宝" :label-width="4" type="password">
    </ly-input>
  </cell>
  <cell>
    <ly-input title="支付宝" :label-width="4">
      <i class="iconfont icon-user" slot="icon" style="color:#409EFF;margin-right:10px;"></i>
    </ly-input>
  </cell>
  <cell>
    <ly-input title="支付宝" :label-width="4">
      <img src="../../static/img/alipay.png" slot="icon" style="width:1em;height:1em;margin-right:10px;"/>
    </ly-input>
  </cell>
</group>

<ul class="description">
  <li><code>icon</code>iconfont图标</li>
  <li><code>iconImg</code>图片路径（相对于根目录）</li>
  <li><code>slot="icon"</code>自定义图标</li>
</ul>

### 内置验证器
<group>
  <cell>
    <ly-input title="验证是否是123" validate="123" :label-width="7"></ly-input>
  </cell>
</group>

### 验证码
<group>
  <cell>
    <ly-input title="验证码" :label-width="4">
      <ly-button slot="right" type="primary" size="mini">发送验证码</ly-button>
    </ly-input>
  </cell>
  <cell>
    <ly-input title="验证码" :label-width="4">
      <ly-button slot="right" type="text" size="mini">发送</ly-button>
    </ly-input>
  </cell>
</group>

<ul class="description">
  <li><code>slot="right"</code>自定义右侧按钮或文字</li>
</ul>


