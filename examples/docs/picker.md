## picker
### 基本用法
<picker title="选择年份" v-model="year1" :data="year">
</picker>
<picker title="生日" v-model="year3" :data="year2">
</picker>

```html
<picker title="选择年份" v-model="year1" :data="year">
</picker>
<picker title="生日" v-model="year3" :data="year2">
</picker>
```

### 关联列
<picker title="出生地区" v-model="area1" :data="area" :columns="3">
</picker>

