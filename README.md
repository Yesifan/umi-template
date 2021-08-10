# 耕耘前端项目模板

[Mock](./mock/README.md) | [API](./src/services/README.md) | [GIT](#git)
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

# git
    commit rule
    💥 feat(compiler): add 'comments' option
    🐛 fix(compiler): fix some bug
    📝 docs(compiler): add some docs
    🌷 UI(compiler): better styles
    🏰 chore(compiler): Made some changes to the scaffolding
    🌐 locale(compiler): Made a small contribution to internationalization

# 开发步骤
1. 创建页面
2. 定义MOCK/创建API