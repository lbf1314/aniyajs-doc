---
title: AAutoComplete
nav:
  title: 组件
  path: /common
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

| 参数          | 说明                                                                             | 类型                                                       | required |
| ------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------- |
| name          | Form.Item 中的 name                                                              | [NamePath](https://ant.design/components/form-cn#namepath) | true     |
| label         | Form.Item 中的 label                                                             | ReactNode                                                  | false    |
| formItemProps | Form.Item 的默认属性，[参考文档](https://ant.design/components/form-cn#formitem) | object                                                     | false    |
| initialValue  | Form.Item 中的 initialValue                                                      | 由当前节点决定                                             | false    |
| rules         | Form.Item 中的 rules                                                             | [Rule](https://ant.design/components/form-cn#rule)[]       | false    |

### AAutoComplete props

| 参数          | 说明                                                                                                 | 类型                                          | required |
| ------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------- |
| widgetProps   | AutoComplete 的默认属性，[参考文档](https://ant.design/components/auto-complete-cn#api)              | object                                        | false    |
| asyncFn       | 自定义异步规则                                                                                       | (url: string, value: string) => Promise<any\> | false    |
| formatter     | 自定义 selectOptions 格式                                                                            | (childData: any[]) => { label, value }[]      | false    |
| url           | 请求路径，存在时启用异步                                                                             | string                                        | false    |
| selectOptions | AutoComplete props 中的 options 属性，[参考文档](https://ant.design/components/auto-complete-cn#api) | { label, value }[]                            | fasle    |
| onSearch      | AutoComplete props 中的 onSearch 属性，[参考文档](                                                   | (value: string) => void                       | false    |
