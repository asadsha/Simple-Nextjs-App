import React, { ReactElement } from 'react';
// import Link from 'next/link';
import { Layout } from 'antd';
import RegisterComponent from '../src/components/auth/register';

const { Header, Content } = Layout;

const RegisterPage = (): ReactElement => (
  <Layout>
    <Header>
      <h2 style={{ color: 'white' }}>Create Next App</h2>
    </Header>
    <Content>
      <RegisterComponent />
    </Content>
  </Layout>
);

export default RegisterPage;
