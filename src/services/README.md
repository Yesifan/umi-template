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

### [错误码](../lib/constant.ts)
|错误码|错误说明|
|-----|------|
401|未登录
