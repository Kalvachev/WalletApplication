import React, { useRef, useState } from 'react'
import { Form, Input, Button, Row, Col, Card, Alert } from 'antd';
import styles from './register.module.scss'
import { useAuth } from '../contexts/AuthContext'

export default function RegisterPage() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const passConfirmRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


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

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submitting')
        if (passRef.current.state.value !== passConfirmRef.current.state.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            signUp(emailRef.current.state.value, passRef.current.state.value)
            console.log('success')
        } catch {
            setError('Failed to create an account')
            console.log(error)
        }
        console.log('error2')

        setLoading(false);
    }

    return (
        <>
            <Row type="flex" justify="center" align="middle" className={styles.registerRow}>
                <Col>
                    <Card className={styles.registerCard} >
                        <Form
                            // onSubmit={handleSubmit}
                            className={styles.registerForm}
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

                                <Input ref={usernameRef} />
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
                                <Input ref={emailRef} />
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
                                <Input.Password ref={passRef} />
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
                                <Input.Password ref={passConfirmRef} />

                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button disabled={loading} onClick={handleSubmit} type="primary" htmlType="submit">
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



