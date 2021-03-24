import React from 'react'
import { Form, Input, Button, Row, Col, Card } from 'antd';
import styles from './register.module.scss'


export default function RegisterPage() {

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const [form] = Form.useForm();

    return (
        <>
            <Row type="flex" justify="center" align="middle" className={styles.registerRow}>
                <Col>
                    <Card className={styles.registerCard} >
                        <Form className={styles.registerForm}
                            {...formItemLayout}
                            form={form}
                            name="register"
                            scrollToFirstError
                        >
                            <h2 className={styles.registerHeading}>Register</h2>

                            <Form.Item
                                name="nickname"
                                label="Nickname"
                                tooltip="What do you want others to call you?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your nickname!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>


                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />

                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    );
}


