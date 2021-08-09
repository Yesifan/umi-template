# 耕耘前端项目模板

# 技术栈
- 框架 [umi](https://umijs.org/zh-CN) 
- 组件库 [antd](https://ant.design/index-cn) + [antd pro](https://procomponents.ant.design/)

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

# API
- 测试环境 - [swagger]()
- 证书环境 - [swagger]()

### 接口约定
```json
{
  success: boolean,
  data: "data",
  errCode: 100,
  errMsg: "message"
}
```

