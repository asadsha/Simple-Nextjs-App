import React, { ReactElement } from 'react';
// import Link from 'next/link';
import { Layout, Typography } from 'antd';

const IndexPage = (): ReactElement => (
  <Layout>
    <Typography.Title level={2}>Hello Next.js</Typography.Title>
    <Typography.Title level={2}>Still Working on the app</Typography.Title>
    <Typography.Title level={2}>Will integrate hooks, redux files soon.</Typography.Title>
    <Typography.Title level={2}>Visit /login for in progress login Antdesign Page</Typography.Title>
    <Typography.Title level={2}>Visit /register for inprogress signup Antd Page</Typography.Title>
    {/* <Typography>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Typography> */}
  </Layout>
);

export default IndexPage;
