---
title: ACascader
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

### 异步基本使用

<code src="./demos/test03.tsx"></code>

### 异步默认初始第一列

<code src="./demos/test02.tsx"></code>

### 自定义 selectOptions 格式

<code src="./demos/test04.tsx"></code>

### 自定义异步 asyncFn

<code src="./demos/test05.tsx"></code>
<code src="./demos/test06.tsx"></code>

### 异步默认初始值

<code src="./demos/test07.tsx"></code>

## API

### 公共属性

| 参数          | 说明                                                                             | 类型                                                       | required |
| ------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------- |
| name          | Form.Item 中的 name                                                              | [NamePath](https://ant.design/components/form-cn#namepath) | true     |
| label         | Form.Item 中的 label                                                             | ReactNode                                                  | false    |
| formItemProps | Form.Item 的默认属性，[参考文档](https://ant.design/components/form-cn#formitem) | object                                                     | false    |
| initialValue  | Form.Item 中的 initialValue                                                      | 由当前节点决定                                             | false    |
| rules         | Form.Item 中的 rules                                                             | [Rule](https://ant.design/components/form-cn#rule)[]       | false    |

### ACascader props

| 参数            | 说明                                                                                           | 类型                                                                                                                             | required |
| --------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------- |
| widgetProps     | Cascader 的默认属性，[参考文档](https://ant.design/components/cascader-cn#api)                 | object                                                                                                                           | false    |
| asyncFn         | 自定义异步规则，最后必须 return false                                                          | (queryOption: QueryOption, curIndex?: number) => Promise<any\>                                                                   | false    |
| formatter       | 自定义 selectOptions 格式，最后必须 return false                                               | (childData: any[], curloadDataOption?: LoadDataOption \| null \| undefined, curIndex?: number) => Option[] \| undefined \| false | false    |
| loadDataOptions | 异步请求参数，存在时启用异步                                                                   | Array<{ url: string; options?: RequestOptionsInit;} \| null \| undefined>                                                        | false    |
| selectOptions   | Cascader props 中的 options 属性，[参考文档](https://ant.design/components/tree-cn#tree-props) | [Option](https://ant.design/components/cascader-cn#option)[] \| []                                                               | fasle    |
