---
title: 配置
navs: 
  path: /scaffold/config
mobile: false
toc: content
---
## publicPath

* 类型：`string`
* 默认值：`/`

配置 webpack 的 publicPath。

## publicPath

* 类型：`string`
* 默认值：`/`

配置 webpack 的 publicPath。

## outputPath

* 类型：`string`
* 默认值：`build`

配置输出路径。

## devtool

* 类型：`string`
* 默认值：dev 时默认 `cheap-module-source-map`，build 时候默认无 sourcemap

设置 sourcemap 生成方式。

常见可选值有：

* `eval`，最快的类型，缺点是不支持低版本浏览器
* `source-map`，最慢但最全的类型

示例

```js
// 关闭 dev 阶段的 sourcemap 生成
devtool: false;

// 只设置 dev 阶段的 sourcemap
devtool: process.env.NODE_ENV === 'development' ? 'eval' : false;
```

## title

* 类型：`string`
* 默认值：`ANIYA`

配置全局页面 title，暂时只支持静态的 Title。

## imageSizeLimit

* 类型：`number`
* 默认值：`8192`

处理图片等静态资源，**被转换为 Base64 编码的 Data URL 内嵌到代码中；超过则作为单独文件输出。**

## proxy

* 类型：`object`
* 默认值：`{}`

配置代理功能。

示例

```js
proxy: {
  '/api': {
    target: 'https://aniyajs.cn/',
    changeOrigin: true,
    pathRewrite: { '^/api': () => '' },
  },
}
```

然后访问 `/api/users` 就能访问到 https://aniyajs.cn/users 的数据。

注意：proxy 功能仅在 dev 时有效。

## fastRefresh

* 类型：`boolean`
* 默认值：`true`

是否开启热刷新。

注意：fastRefresh 功能目前仅在 react 项目中有效。

## define

* 类型：`object`
* 默认值：`{}`

自定义全局变量

示例

```js
{
  define: {
    'API_DOMAIN': '这是一个dev环境测试的请求路径'
  }
}
```

## open

* 类型：`boolean`
* 默认值：`blue`

项目启动是否直接打开浏览器

## disableESLintPlugin

* 类型：`boolean`
* 默认值：`blue`

默认对 src 目录下的 `.js`, `.jsx`, `.ts`, `.tsx` 文件进行严格的代码规范检查，如果存在 ESLint 错误，则构建失败。

注意：此功能需要存在 ESLint 配置文件

## aniyaPlugins

* 类型：`array`
* 默认值：`[]`

配置你的需要使用的插件

## alias

* 类型：`object`
* 默认值：`{ "@": 'myapp/src', config: 'myapp/config' }`

路径别名

## devServer

* 类型：`object`
* 默认值：`{ port: 8000, host: "0.0.0.0", https: false, ssl_srt_file: "ssl/server.crt", ssl_key_file: "ssl/server.key" }`

开发服务器配置

属性：

* port：端口
* host：IP地址
* https：是否启用https，一旦启用需要存在 `ssl_srt_file` 及 `ssl_key_file` 文件
* ssl_srt_file：SSL/TLS 证书文件
* ssl_key_file：SSL/TLS 私钥文件

## 未开发属性

* chainWebpack：自定义webpack配置
* unocss：是否开启UnoCSS
* analyze：通过指定 [`ANALYZE`](https://umijs.org/docs/guides/env-variables#analyze) 环境变量分析产物构成时，analyzer 插件的具体配置项
* compression：是否启用gzip压缩缓存文件
* chunks：代码分割方案

## 问题

`// ----------------------------------------------`
