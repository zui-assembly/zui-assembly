# Link 文字链接

文字超链接

## 基础用法

<demo src="./link/link-base.vue" title="基础的文字链接用法"></demo>

## 禁用状态

<demo src="./link/link-disabled.vue" title="文字链接不可用状态"></demo>

## 下划线

<demo src="./link/link-underline.vue" title="文字链接下划线"></demo>

## 图标

<demo src="./link/link-icon.vue" title="带图标的文字链接可增强辨识度"></demo>

## API

### Link Props

| 参数      | 类型    | 可选                                        | 说明           | 默认值  |
| --------- | ------- | ------------------------------------------- | -------------- | ------- |
| type      | string  | primary / success / warning / danger / info | 类型           | default |
| underline | boolean | -                                           | 是否下划线     | true    |
| disabled  | boolean | -                                           | 是否禁用状态   | false   |
| href      | string  | -                                           | 原生 href 属性 | -       |
| icon      | string  | -                                           | 图标类名       | -       |

<style scope>
/* // 覆盖默认样式 */
.vp-doc a[class*="z-link--default"] {
  color: #606266;
}
.vp-doc a[class*="z-link--default"]:hover {
  color: #409eff;
}
.vp-doc a[class*="z-link--primary"] {
  color: #409eff;
}
.vp-doc a[class*="z-link--success"] {
  color: #67c23a;
}
.vp-doc a[class*="z-link--warning"] {
  color: #e6a23c;
}
.vp-doc a[class*="z-link--danger"] {
  color: #f56c6c;
}
.vp-doc a[class*="z-link--info"] {
  color: #909399;
}
</style>
