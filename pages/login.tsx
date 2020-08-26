import React, { ReactElement } from 'react';
// import Link from 'next/link';
import { Layout } from 'antd';
import LoginComponent from '../src/components/auth/login';

const { Header, Content } = Layout;

const LoginPage = (): ReactElement => (
  <Layout>
    <Header>
      <h2 style={{ color: 'white' }}>Create Next App</h2>
    </Header>
    <Content>
      <LoginComponent />
    </Content>
  </Layout>
);

export default LoginPage;
