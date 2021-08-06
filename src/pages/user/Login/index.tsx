import { Button, message } from 'antd';
import React from 'react';
import { Link, history, SelectLang, useModel } from 'umi';

import { oauth } from '@/services/API'

import styles from './index.less';

const Login: React.FC = () => {
  const { setInitialState } = useModel('@@initialState');

  const fetchUserInfo = async () => {
    const res = await oauth.login();
    if (res.data) {
      await setInitialState((s) => ({
        ...s,
        currentUser: res.data,
      }));
    }
  };

  const handleLogin = async () => {
    await fetchUserInfo();
    message.success("登录成功");
    /** 此方法会跳转到 redirect 参数所在的位置 */
    if (!history) return;
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    history.push(redirect || '/');
  }

  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src="/logo.svg" />
              <span className={styles.title}>浩丰环控</span>
            </Link>
          </div>
          <div className={styles.desc}>
            青岛最具影响力农业环控系统
          </div>
        </div>
        <div>
          <Button onClick={handleLogin}>登录</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
