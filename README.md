# 耕耘前端项目模板

# 技术栈
- 框架 [umi](https://umijs.org/zh-CN) 
- [轻量化的全局状态管理](https://umijs.org/zh-CN/plugins/plugin-model)
- 请求库 [axios](https://axios-http.com/) + [swr](https://swr.vercel.app/zh-CN)
- 组件库 [antd](https://ant.design/index-cn) + [pro components](https://procomponents.ant.design/)

## 类型
- [全局类型定义](src/typings.d.ts)
- [API类型定义](src/services/API/typings.d.ts)

## [命令行工具](https://umijs.org/zh-CN/docs/cli)

## [约定式路由](https://umijs.org/zh-CN/docs/convention-routing)
比如以下文件结构：
```
.
  └── pages
    ├── index.tsx
    └── users.tsx
``` 
会得到以下路由配置，

```json
[
  { exact: true, path: '/', component: '@/pages/index' },
  { exact: true, path: '/users', component: '@/pages/users' },
]
```
需要注意的是，满足以下任意规则的文件不会被注册为路由，

- 以 . 或 _ 开头的文件或目录
- 以 d.ts 结尾的类型定义文件
- 以 test.ts、spec.ts、e2e.ts 结尾的测试文件（适用于 .js、.jsx 和 .tsx 文件）
- components 和 component 目录
- utils 和 util 目录
- 不是 .js、.jsx、.ts 或 .tsx 文件
- 文件内容不包含 JSX 元素

## [MOCK](https://umijs.org/zh-CN/docs/mock)
约定 [./mock](mock) 下所有文件为 mock 文件。
引入 [mockjs](http://mockjs.com/) 辅助生成 mock 数据。
```TypeScript
import { Random } from 'mockjs';

const USER_INFO: API.User = {
  id: Random.natural(),
  username: Random.name(),
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  name: Random.name(),
  sex: 1,
  phone: '0752-268888888',
  role: [{ name: "asdf", id: 1 }],
  state: 1,
  remark: Random.string(),
  creationTime: Random.datetime(),
  lastmodificationTime: Random.datetime(),
}

const USER_WITH_ACCESS_TOEKN: API.UserWithToken = {
  ...USER_INFO,
  accessToken: Random.string(21)
}
```

# API
- 测试环境 - [swagger]()
- 证书环境 - [swagger]()

## 接口约定
```TypeScript
type SuccessInterface<D> = {
  success: true,
  data: D,
};

type ErrorInterface<E = null> = {
  data: E,
  success: false,
  errCode?: number,
  errMsg?: string
}

type Interface<D, E = null> = SuccessInterface<D> | ErrorInterface<E>;

// 401 token过期
type TokenError = {
  success: false,
  errCode: '401',
  errMsg: "登录状态过期"
}
```

### [错误码](src/lib/constant)
|错误码|错误说明|
|-----|------|
401|未登录
