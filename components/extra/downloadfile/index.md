---
title: DownloadFile
nav:
  title: 组件
  path: /common
group:
  title: 额外组件
mobile: false
toc: content
---
## 代码演示

### 导出 excel

<code src="./demos/test01.tsx"></code>

### 打包下载图片文本文件

<code src="./demos/test02.tsx"></code>

### 异步下载

<code src="./demos/test03.tsx"></code>

### 自定义 children

<code src="./demos/test04.tsx"></code>

### 自定义异步 asyncFn

<code src="./demos/test05.tsx"></code>

## API

### DownloadFile Props

| 参数             | 说明                                                                                                                                        | 类型                                                                   | require |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------- |
| children         | 自定义 children，存在 buttonTypeProps 属性时 buttonTypeProps 优先                                                                           | React.ReactChild                                                       | false   |
| isAsync          | 是否启用异步，默认开启                                                                                                                      | boolean                                                                | false   |
| downloadUrl      | 请求地址，isAsync 为 true 时必填                                                                                                            | string                                                                 | false   |
| data             | 请求参数                                                                                                                                    | Record<string, any>                                                    | false   |
| buttonTypeProps  | 存在就是按钮模式，属性参考 Button[默认属性](https://ant.design/components/button-cn#api)                                                       | object                                                                 | false   |
| folderName       | 总文件、包名                                                                                                                                | string                                                                 | true    |
| excelProps       | excel 配置【columns：列标题、dataSource：数据、columnsWidth：列宽】，<font color="red">存在就开启 excel 下载，不要和 folderData 混用</font> | {columns: Partial<Column\>[];dataSource: T[];columnsWidth?: number[];} | false   |
| folderData       | 下载压缩文件所需数据                                                                                                                        | [folderDatas](#folderdatas)[]                                             | false   |
| beforeDownloadFn | 下载前的回调函数，return true 继续执行，反之                                                                                                | () => boolean;                                                         | false   |
| asyncFn          | 自定义异步                                                                                                                                  | (url: string, queryData?: Record<string, any>) => Promise<any\>        | false   |

### Types

#### <font id="folderdatas">folderDatas</font>

```tsx
interface folderDatas {
  folderName?: string; // 文件夹名
  fileName?: string; // 文件名
  imageUrl?: string; // 图片url
  content?: string; // 文本内容
  // 子节点
  data?:
    | folderDatas[]
    | Partial<{ fileName: string; imageUrl: string }>[]
    | Partial<{ fileName: string; content: string }>[];
}
```
