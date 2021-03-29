import React, { useState, useRef } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import styles from './login.module.scss'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function LoginPage() {
    const emailRef = useRef();
    const passRef = useRef();
    const { logIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory()

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

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submitting')

        try {
            setError('')
            setLoading(true)
            logIn(emailRef.current.state.value, passRef.current.state.value)
            console.log('success')
            history.push('/')
        } catch {
            setError('Failed to log in')
            console.log(error)
        }

        setLoading(false);
    }

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
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input ref={emailRef} />
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
                            <Input.Password ref={passRef} />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button disabled={loading} onClick={handleSubmit} type="primary" htmlType="submit">
                                Log In
                            </Button>
                        </Form.Item>
                        <div>
                            Need an account? <Link to='/register'>Sign Up</Link>
                        </div>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}




