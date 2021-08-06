import { message } from 'antd';
import React, { useState } from 'react';
import { Link, history, SelectLang, useModel } from 'umi';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { oauth } from '@/services/API'

import styles from './index.less';

const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
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
    setSubmitting(true);
    await fetchUserInfo();
    message.success("登录成功");
    /** 此方法会跳转到 redirect 参数所在的位置 */
    if (!history) return;
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    history.push(redirect || '/');
    setSubmitting(false);

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
        <div className={styles.main}>
          <ProForm
            initialValues={{
              autoLogin: true,
            }}
            submitter={{
              searchConfig: {
                submitText: "登录",
              },
              render: (_, dom) => dom.pop(),
              submitButtonProps: {
                loading: submitting,
                size: 'large',
                style: {
                  width: '100%',
                },
              },
            }}
            onFinish={async () => {
              handleLogin();
            }}
          >
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder="用户名"
              rules={[
                {
                  required: true,
                  message: "请输入用户名",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder="请输入密码！"
              rules={[
                {
                  required: true,
                  message: "请输入密码！",
                },
              ]}
            />
          </ProForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
