## [MOCK](https://umijs.org/zh-CN/docs/mock)
约定该文件价下所有文件为 mock 文件。
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