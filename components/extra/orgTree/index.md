---
title: OrgTree
nav:
  title: 组件
  path: /common
group:
  title: 额外组件
mobile: false
toc: content
---
## 代码演示

### 基础演示

<code src="./demos/test01.tsx"></code>

### 不可折叠

<code src="./demos/test02.tsx"></code>

### 自定义节点内容

<code src="./demos/test03.tsx"></code>

### <font color='red'>自定义展开方向</font>

<code src="./demos/test04.tsx"></code>

### <font color='red'>异步</font>

<code src="./demos/test05.tsx"></code>

### 完全受控

<code src="./demos/test06.tsx"></code>

## API

### OrgTree Props

| 参数 | 说明       | 类型                    | require |
| ---- | ---------- | ----------------------- | ------- |
| data | 树结构数据 | [DataType](#datatype)[]\|[] |false |
| horizontal | 排列方向 | 'left' \| 'right' \| 'top' \| 'bottom' | false |
| isCollapsable | 是否可折叠 | boolean | false |
| defaultExpandAll | 默认是否展开全部 | boolean | false |
| expandKeys |  |  |  |
 

### Types

#### <font id="datatype">DataType</font>

```typescript
export type DataType = {
  label: Key; // 节点文本
  key: Key; // 节点唯一标识
  title?: Key; // 节点标题
  havedChildren?: boolean; // 是否有子节点
  children?: DataType[] | []; // 子数据
  [key: string]: any;
}
```
