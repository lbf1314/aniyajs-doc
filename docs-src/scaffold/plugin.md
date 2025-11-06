---
title: 插件
navs: 
  path: /aniyajs/plugin
mobile: false
toc: content
---
## Plugins

### @aniyajs/router

#### 启用方式

1. 安装 `npm i @aniyajs/router`
2. 配置 `config/config` 文件启用。

#### 介绍

稳定版：[![npm package](https://img.shields.io/npm/v/@aniyajs/plugin-router.svg?style=flat-square)](https://www.npmjs.com/package/@aniyajs/plugin-router) [![NPM downloads](http://img.shields.io/npm/dm/@aniyajs/plugin-router.svg?style=flat)](https://npmjs.org/package/@aniyajs/plugin-router)

提供完善的 Aniya 风格的可配置式路由，你可以这样写：

```js
{
  routes: [
    {
      name: "home",
      title: "首页",
      path: '/',
      component: './home',
    },
    {
      name: "login",
      title: "登录页",
      path: '/login',
      component: './sys/login',
    },
    {
      name: "user",
      title: "个人中心",
      path: '/user',
      component: './sys/user',
    }
  ],
  aniyaPlugins: [
    '@aniyajs/plugin-router'
  ],
}
```

#### 配置

- `name`：名称，Type：`String`
- `path`：路由地址，Type：`String`
- `redirect`：重定向，Type：`String`
- `routes`：子路由，Type：`IRoute[] | []`
- `component`：相对于 `src/pages` 的相对文件地址，Type：`String`

### @aniyajs/tooltik

#### 启用方式

1. 安装 `npm i @aniyajs/tooltik`
2. 配置 `config/config` 文件启用。

#### 介绍

稳定版：[![npm package](https://img.shields.io/npm/v/@aniyajs/plugin-tooltik.svg?style=flat-square)](https://www.npmjs.com/package/@aniyajs/plugin-tooltik) [![NPM downloads](http://img.shields.io/npm/dm/@aniyajs/plugin-tooltik.svg?style=flat)](https://npmjs.org/package/@aniyajs/plugin-tooltik)

包含以下功能：

- 内置 `@reduxjs/tooltik`
- 具体使用请查看[文档](https://redux-toolkit.js.org/api/configureStore)

配置，比如：

```ts
{
  toolTik: true,
  aniyaPlugins: [
    '@aniyajs/plugin-tooltik',
  ],
}
```

##### 约定式的 model 组织方式

符合以下规则的文件会被认为是 model 文件：

- `src/models` 下的文件
- `src/pages` 下，所有 `model.{ts,js}` 文件(不区分任何字母大小写)

比如：

```txt
—— src
  —— models
    —— a.*
  —— pages
    —— home
      —— model.*
```

其中 `a.*`，`model.*`，如果内容为正确的 @aniyajs/tooltik model 写法，会被认为是 model 文件。比如你可以这样写：

models/user.ts

```ts
import { createAsyncThunk } from '@aniyajs/plugin-tooltik';
import { getUserInfo, getCode } from '@/services/user';

export interface LoginInfoType {
  name: string
  avatar: string
  email: string
  phone: string
  role: string
}

export interface UserState {
  loginInfo: Partial<LoginInfoType>
  userInfo: Partial<any>
  code: string
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export interface UserModel {
  name: 'user'
  initialState: UserState
  reducers: {
    save: (state: UserState, _: { payload: any }) => void
  },
  extraReducers: (builder: any) => void;
}

export const getUserInfoAsync = createAsyncThunk(
  'user/getUserInfo',
  getUserInfo
);

export const getCodeAsync = createAsyncThunk(
  'user/getCode',
  getCode
);

export const initializeApp = createAsyncThunk(
  'user/initialize',
  async (_, { dispatch }) => {
    // 🔗 串行执行多个异步请求
    const user = await dispatch(getUserInfoAsync()).unwrap();
    const code = await dispatch(getCodeAsync()).unwrap();

    return { user, code };
  }
);

const userModel: UserModel = {
  name: "user",
  initialState: {
    loginInfo: {},
    userInfo: {},
    code: '',
    loading: 'idle',
  },
  reducers: {
    save: (state, { payload }) => {
      let _state = state
      _state = Object.assign(state, {
        ...payload,
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeApp.pending, (state: any) => {
        state.loading = 'pending';
      })
      .addCase(initializeApp.fulfilled, (state: any, action: any) => {
        state.loading = 'succeeded';

        if (action?.payload?.user?.code === 200) {
          state.userInfo = action?.payload?.user?.result ?? {}
        } else {
          state.userInfo = {}
        }

        if (action?.payload?.code?.code === 200) {
          state.code = action?.payload?.code?.result ?? {}
        } else {
          state.code = {}
        }
      });
  }
}

export default userModel
```

services/user.ts

```ts
import axios from 'axios';
export const getUserInfo = async () => {
  return new Promise((resolve, reject) => {
    axios.post('/api/user/info').then(res => {
      if (res?.status === 200) {
        resolve(res?.data)
      } else {
        reject(false)
      }
    }).catch(err => { 
      reject(false)
    });
  })
}

export const getCode = async () => {
  return new Promise((resolve, reject) => {
    axios.post('/api/user/getCode').then(res => {
      if (res?.status === 200) {
        resolve(res?.data)
      } else {
        reject(false)
      }
    }).catch(err => { 
      reject(false)
    });
  })
}
```

## 拓展

### 介绍

为了提高插件的可拓展性，我们提供了插件开发的能力，你可以创建 `lib.js` 文件基于我们提供的api开发自己的插件。

具体api请查阅[文档](/scaffold/2-pluginapi)

### 案例

```js
/**
 * 以下用到了 `describe` 和 `modifyConfig`，用于自定义改 aniya 脚手架的 title 配置
 */
// lib.js

export default (api) => {
  api.describe({
    key:"headTitle1",
    config: {
      default: () => "这是一个测试1",
    }
  });
  api.modifyConfig((memo) => {
    memo.title = (memo.headTitle1 != undefined) ? memo.headTitle2 : api.describeParams.config.default;
    return memo;
  })
};
```
