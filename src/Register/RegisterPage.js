import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Row, Col, Card } from 'antd';
import styles from './register.module.scss'
import { useHistory } from "react-router-dom";
import uuid from 'react-uuid'
import firebase from "../firebase";
import { database } from "../firebase";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [startingMoney, setStartingMoney] = useState(null)
    const [error, setError] = useState("");
    const history = useHistory();

    const onRegister = () => {
        if (startingMoney && startingMoney > 20) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const userUID = userCredential.user.uid;

                    database
                        .collection("users")
                        .doc(userUID)
                        .set({
                            id: userUID,
                            name: name,
                            email: email,
                            bills: [],
                        })
                        .then(() => {
                            console.log("Successfully written!");
                        })
                        .catch((error) => {
                            console.error("Error on writing: ", error);
                        });

                    database
                        .collection("bills")
                        .add({
                            type: 'income',
                            createdBy: userUID,
                            title: 'Starting money',
                            amount: startingMoney,
                            categorie: 'Starting Money',
                            date: new Date().toLocaleDateString(),
                            time: new Date().toLocaleTimeString(),
                            id: uuid()
                        })
                        .then(() => {

                        })
                        .catch((error) => {
                            console.error("Error on writing: ", error);
                        });

                    history.push("/login");
                })
                .catch((error) => {
                    console.log("Error: ", error);
                    setError(error.message);
                });
        }
    };

    // Form Layout
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
                        <Form
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

                                <Input
                                    value={name}
                                    onInput={(ev) => setName(ev.target.value)} />
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
                                <Input value={email}
                                    onInput={(ev) => setEmail(ev.target.value)} />
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
                                <Input.Password
                                    value={password}
                                    onInput={(ev) => setPassword(ev.target.value)} />
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
                                <Input.Password
                                    value={password}
                                    onInput={(ev) => setPassword(ev.target.value)}
                                />

                            </Form.Item>

                            <Form.Item
                                name="Starting Amount"
                                label="Enter Starting amount"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type="number" min='0' value={startingMoney} onChange={(ev) => setStartingMoney(ev.target.value)} />
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" onClick={onRegister}>
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



