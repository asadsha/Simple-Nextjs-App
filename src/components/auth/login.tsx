/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {
  Typography, Row, Col, Form, Input, Button,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from '../style/login.module.css';

const { Title, Text } = Typography;

export default function LoginPage() {
  const onFinish = () => {
    console.log('Received values of form: ');
  };

  return (
    <div className={styles.container}>
      <Row className={styles.rowcontent}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          className={styles.displayflex}
        >
          <Form
            name="normal_login"
            className={styles.loginform}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div
              className={styles.displayflex}
              style={{ marginBottom: '40px' }}
            >
              <Typography>
                <Title>LOGIN</Title>
              </Typography>
            </div>
            <Form.Item>
              <Button className={styles.linkedinbutton}>LINKED IN</Button>
            </Form.Item>
            <Form.Item>
              <Button className={styles.gmailbutton}>GMAIL</Button>
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginformbutton}
              >
                Log in
              </Button>
            </Form.Item>
            <div className={styles.displayflex}>
              <Text>
                Not Registered?
                <u>&nbsp;SIGN UP</u>
              </Text>
            </div>
          </Form>
        </Col>
        <Col
          xs={{ span: 0 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          className={styles.displayflex}
        >
          <img
            style={{ width: '80%', height: '70%' }}
            src="/login1.png"
            alt="login-pic"
          />
        </Col>
      </Row>
    </div>
  );
}
