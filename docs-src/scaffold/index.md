---
title: 开始
description: 基于webpack5开发的一款专注于打包、运行的工具
navs: 
  path: /scaffold
mobile: false
toc: content
---
## 🎊 介绍

`Aniyajs` 是一款借鉴 `create-react-app` & `umi` 部分代码及思路开发的一款开箱即用自动化前端框架。

基于 aniyajs 的插件机制，你可以利用我们提供的 [各类插件](/aniyajs/plugin#api)，或者通过 [插件API](/scaffold/2-pluginapi) 快速开发自己的插件，进而实现丰富你的项目。

## ✨ 特性

- 开箱即用
- 内置可插拔式插件
- ......

## 🪧 兼容环境

- node 版本尽量高于或等于 v16.x
- 启用快速刷新，react版本需大于或等于 v16.9.0

## 🎯 版本

- 稳定版：[![npm package](https://img.shields.io/npm/v/@aniyajs/rotor.svg?style=flat-square)](https://www.npmjs.com/package/@aniyajs/tools) [![NPM downloads](http://img.shields.io/npm/dm/@aniyajs/rotor.svg?style=flat)](https://npmjs.org/package/@aniyajs/tools)

## ✨ 快速上手

### 安装

```bash
# 全局使用
npm i @aniyajs/rotor -g

# 项目中使用
npm i @aniyajs/rotor
```

### 使用

修改package.json文件

```json
"scripts": {
   "start": "cross-env ANIYAJS_ENV=dev aniya dev",
   "build": "cross-env ANIYAJS_ENV=dev aniya build",
},
```

## 🥰 demo

- [最简结构的demo](https://gitee.com/new-aniyajs/aniyajs-reactapp.git)
