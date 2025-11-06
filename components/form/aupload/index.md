---
title: AUpload
nav:
  title: 组件
  path: /aniyajs-doc/common
group:
  title: 表单组件
mobile: false
toc: content
---

## 代码演示

### 基本使用

<code src="./demos/test01.tsx"></code>

## API

### 公共属性

| 参数          | 说明                                                         | 类型                                                       | required |
| ------------- | ------------------------------------------------------------ | ---------------------------------------------------------- | -------- |
| name          | Form.Item 中的 name                                          | [NamePath](https://ant.design/components/form-cn#namepath) | true     |
| label         | Form.Item 中的 label                                         | ReactNode                                                  | false    |
| formItemProps | Form.Item 的默认属性，[参考文档](https://ant.design/components/form-cn#formitem) | object                                                     | false    |
| initialValue  | Form.Item 中的 initialValue                                  | 由当前节点决定                                             | false    |
| rules         | Form.Item 中的 rules                                         | [Rule](https://ant.design/components/form-cn#rule)[]       | false    |

### AUpload Props

| 参数        | 说明                                                         | 类型   | required |
| ----------- | ------------------------------------------------------------ | ------ | -------- |
| widgetProps | Upload 的默认属性，[参考文档](https://ant.design/components/upload-cn#api) | object | false    |
