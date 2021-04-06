import React, { useState } from 'react'
import { Form, Input, Button, Row, Col, Card, Alert } from 'antd';
import styles from './login.module.scss'
import { Link } from 'react-router-dom'
import firebase from "../firebase";
import { loginWithCredentials } from './LoginService';
import { useHistory } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const onLogin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                history.push("/");

                console.log('Successfull login:', user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // Form Layout
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
                        {error ? <div className={styles.errorMsg}> <Alert message='Incorrect email or password. Try again.' type="error" /></div> : null}
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
                            <Input
                                value={email}
                                onInput={(ev) => setEmail(ev.target.value)}
                            />
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
                            <Input.Password
                                value={password}
                                onInput={(ev) => setPassword(ev.target.value)} />
                        </Form.Item>
                        <div className={styles.loginBtn}>
                            <Form.Item {...tailLayout} >
                                <Button type="primary" htmlType="submit" onClick={onLogin} >
                                    Log In
                            </Button>
                            </Form.Item>
                        </div>
                        <div className={styles.accLink}>
                            Need an account?&nbsp;<Link to='/register'>Sign Up</Link>
                        </div>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}




