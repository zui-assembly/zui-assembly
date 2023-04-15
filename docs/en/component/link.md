# Link

Text hyperlink

## Basic Usage

<demo src="./link/link-base.vue" title="Basic Text Link Usage"></demo>

## Disabled State

<demo src="./link/link-disabled.vue" title="Text link unavailable status"></demo>

## Underline

<demo src="./link/link-underline.vue" title="Text link underline"></demo>

## Icon

<demo src="./link/link-icon.vue" title="Text links with icons enhance recognition"></demo>

## API

### Link Props

| Parameter | Type    | Optional                                    | Explain               | Default value |
| --------- | ------- | ------------------------------------------- | --------------------- | ------------- |
| type      | string  | primary / success / warning / danger / info | Type                  | default       |
| underline | boolean | -                                           | IsUnderline           | true          |
| disabled  | boolean | -                                           | IsDisabled            | false         |
| href      | string  | -                                           | Native href attribute | -             |
| icon      | string  | -                                           | Icon Name             | -             |

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
