---
title: 插件API
navs: 
  path: /scaffold/pluginapi
mobile: false
toc: content
---
## 核心方法

### describe

```typescript
api.describe({ key?: string, config?: { default?: any } })
```

在插件注册阶段执行，用于描述插件或者插件集的 key、配置信息等。

* `key` 是配置中该插件配置的键名
* `config.default` 是插件配置的默认值

### generate

```typescript
api.generate?: (args?:Partial<string, string>) => void
```

可在其中生成所需文件，其中参数 args 包含项目中各文件及文件夹绝对路径。

## 扩展方法

### readFilterdir

```typescript
api.readFilterdir?: ({ rootPath: string, withSuffix: boolean, filterHandle?:(string[] | []) => string[] | [] }) => Promise<string[] | []>
```

异步读取指定目录下的文件绝对路径

* `rootPath` 读取目录路径
* `withSuffix` 是否保留后缀
* `filterHandle` 过滤函数

### copyTpl

```typescript
api.copyTpl?: ({ form: string, to: string, define: Partial<string, any> }) => void
```

同步复制模版

* `from` 模版文件地址
* `to` 目标文件
* `define` 自定义变量

### writeFile

```typescript
api.writeFile?: ({ file?: string, content?: string }) => void
```

同步写入文件

* `file` 文件路径
* `content` 写入内容

### modifyConfig

```typescript
api.modifyConfig?: (callFn?:(config: object) => void) => (callFn?:(config: object) => void)
```

可修改原有的config配置文件

* `callFn` 参数为config配置文件的回调函数
