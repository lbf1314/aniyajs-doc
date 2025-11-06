---
title: AInput
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

### AInput.TextArea用法

<code src="./demos/test02.tsx"></code>

### AInput.Password用法

<code src="./demos/test03.tsx"></code>

### AInput.Number用法

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

### AInput

| 参数        | 说明                                                         | 类型   | required |
| ----------- | ------------------------------------------------------------ | ------ | -------- |
| widgetProps | Input 的默认属性，[参考文档](https://ant.design/components/input-cn#input) | object | false    |

### AInput.TextArea

| 参数        | 说明                                                         | 类型   | required |
| ----------- | ------------------------------------------------------------ | ------ | -------- |
| widgetProps | Input.TextArea 的默认属性，[参考文档](https://ant.design/components/input-cn#inputtextarea) | object | false    |

### AInput.Password

| 参数        | 说明                                                         | 类型   | required |
| ----------- | ------------------------------------------------------------ | ------ | -------- |
| widgetProps | Input.Password 的默认属性，[参考文档](https://ant.design/components/input-cn#inputpassword) | object | false    |

### AInput.Number

| 参数        | 说明                                                         | 类型   | required |
| ----------- | ------------------------------------------------------------ | ------ | -------- |
| widgetProps | InputNumber 的默认属性，[参考文档](https://ant.design/components/input-number-cn#api) | object | false    |

