---
title: ASelect
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

### 异步

<code src="./demos/test02.tsx"></code>

### 自定义 selectOptions 格式

<code src="./demos/test03.tsx"></code>

### 自定义异步 asyncFn

<code src="./demos/test04.tsx"></code>
## API

### 公共属性

| 参数          | 说明                                                         | 类型                                                       | required |
| ------------- | ------------------------------------------------------------ | ---------------------------------------------------------- | -------- |
| name          | Form.Item 中的 name                                          | [NamePath](https://ant.design/components/form-cn#namepath) | true     |
| label         | Form.Item 中的 label                                         | ReactNode                                                  | false    |
| formItemProps | Form.Item 的默认属性，[参考文档](https://ant.design/components/form-cn#formitem) | object                                                     | false    |
| initialValue  | Form.Item 中的 initialValue                                  | 由当前节点决定                                             | false    |
| rules         | Form.Item 中的 rules                                         | [Rule](https://ant.design/components/form-cn#rule)[]       | false    |

### ASelect Props

| 参数        | 说明                                                         | 类型                                                         | required |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| widgetProps | ASelect 的默认属性，[参考文档](https://ant.design/components/select-cn#select-props) | object                                                       | false    |
| selectOptions | ASelect props 中的 options 属性                        | { label, value }[]    |false|
| url | 异步请求接口地址，存在时启用异步 | string |false|
| formatter | 自定义 selectOptions 格式 | (childData: any[]) => SelectProps['options']; |false|
| asyncFn | 自定义异步 | (url: string) => Promise<any\> |false|

