---
title: ATreeSelect
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

### 复选框

<code src="./demos/test02.tsx"></code>

### 完全受控

<code src="./demos/test03.tsx"></code>

### 多选

<code src="./demos/test04.tsx"></code>

### 异步

<code src="./demos/test05.tsx"></code>

### 自定义 treeData 格式

<code src="./demos/test06.tsx"></code>

### 自定义异步 asyncFn

<code src="./demos/test07.tsx"></code>

### 点击展开节点，异步加载

<code src="./demos/test08.tsx"></code>

### 默认初始第 n 级数据

<code src="./demos/test09.tsx"></code>

## API

### 公共属性

| 参数          | 说明                                                                             | 类型                                                       | required |
| ------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------- |
| name          | Form.Item 中的 name                                                              | [NamePath](https://ant.design/components/form-cn#namepath) | true     |
| label         | Form.Item 中的 label                                                             | ReactNode                                                  | false    |
| formItemProps | Form.Item 的默认属性，[参考文档](https://ant.design/components/form-cn#formitem) | object                                                     | false    |
| initialValue  | Form.Item 中的 initialValue                                                      | 由当前节点决定                                             | false    |
| rules         | Form.Item 中的 rules                                                             | [Rule](https://ant.design/components/form-cn#rule)[]       | false    |

### ATreeSelect Props

| 参数            | 说明                                                                                                     | 类型                                                                                | required |
| --------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| widgetProps     | TreeSelect 的默认属性，[参考文档](https://ant.design/components/tree-select-cn#api)                      | object                                                                              | false    |
| treeData        | TreeSelect props 中的 treeData 属性，[参考文档](https://ant.design/components/tree-select-cn#tree-props) | array<{value, title, children, [disabled, disableCheckbox, selectable, checkable]}> | false    |
| url             | 异步一次性加载所有数据时使用，<font color="red">不要和 loadDataOptions 混用</font>                       | string                                                                              | false    |
| loadDataOptions | 需要节点展开异步加载时使用                                                                               | Array<{ url: string; options?: RequestOptionsInit;} \|null \|undefined>             | false    |
| formatter       | 自定义 treeData 格式，最后必须 return false                                                              | (childData: any[], curIndex?: number) => TreeProps['treeData'] \| false             | false    |
| asyncFn         | 自定义异步，最后必须 return false                                                                        | (queryOption: QueryOption, curIndex?: number) => Promise<any\>                      | false    |
