import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import styles from './login.module.scss'

export default function LoginPage() {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    return (
        <Row type="flex" justify="center" align="middle" style={{ minHeight: '100%' }} className={styles.loginRow}>
            <Col>
                <Card className={styles.loginCard}>
                    <Form className={styles.loginForm}
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                    >

                        <h2 className={styles.loginHeading}>Login</h2>

                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}




