import React, { useState, useEffect } from 'react';
import { database } from '../firebase'

import {
    Form,
    Button,
    Select,
    DatePicker,
    InputNumber,
    Row,
    Col,
    Card,
    Tabs,
    Input,
    TimePicker,
    Modal
} from 'antd';

import firebase from '../firebase'
import styles from './addrecord.module.scss';

const { TabPane } = Tabs;

export default function AddRecord() {
    const [componentSize, setComponentSize] = useState('default');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [categorie, setCategorie] = useState('');
    const [date, setDate] = useState();;
    const [time, setTime] = useState();
    const [bills, setBills] = useState([]);

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    const [visible, setVisible] = useState(false);


    const onSubmit = () => {
        const userUID = firebase.auth().currentUser.uid;

        database
            .collection("bills")
            .add({
                createdBy: userUID,
                title: title,
                amount: amount,
                categorie: categorie
            })
            .then(() => {
                console.log("Successfully set!");
            })
            .catch((error) => {
                console.error("Error on writing: ", error);
            });
    }

    return (
        <div className={styles.modalButtonContainer}>
            <Button type="primary" onClick={() => setVisible(true)}>
                + Record
                </Button>

            <Modal
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                width={600}
                footer={null}
            >

                <Row type="flex" justify="center" align="middle" className={styles.homePageRow}>
                    <Col>
                        <Form
                            className={styles.homePageForm}
                            labelCol={{
                                span: 3,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"
                            initialValues={{
                                size: componentSize,
                            }}
                            onValuesChange={onFormLayoutChange}
                            size={componentSize}
                        >
                            {/* <h2 className={styles.homepageHeading}>
                                Hello, username!
                                Your Balance is 0$
                            </h2> */}

                            <div className={styles.topRecordsPart}>
                                <Tabs type="card">
                                    <TabPane tab="Expense" key="1" className={styles.expenseTab}>
                                        <Form.Item label="Amount" className={styles.homepageTypeAmount}>
                                            <Input type="number" value={amount} onChange={(ev) => setAmount(ev.target.value)} />
                                        </Form.Item>
                                    </TabPane>

                                    <TabPane tab="Income" key="2" className={styles.expenseTab}>
                                        <Form.Item label="Amount" className={styles.homepageTypeAmount}>
                                            <Input type="number" value={amount} onChange={(ev) => setAmount(ev.target.value)}
                                                className={styles.homepageTypeAmountInput} />
                                        </Form.Item>
                                    </TabPane>
                                </Tabs>
                            </div>

                            <div id={styles.bottomRecordsPart}>
                                <Form.Item label="Title" className={styles.homepageTypeDate}>
                                    <Input
                                        value={title}
                                        onInput={(ev) => setTitle(ev.target.value)}
                                        style={{ width: "310px" }} />
                                </Form.Item>

                                <Form.Item
                                    label="Category"
                                    name="category"
                                    className={styles.homepageTypeExpense}>

                                    <Select
                                        onChange={(value) => setCategorie(value)}
                                        style={{ width: "310px" }} >
                                        <Select.Option value={"foodAndDrinks"}>Food &amp; Drinks</Select.Option>
                                        <Select.Option value="shopping">Shopping</Select.Option>
                                        <Select.Option value="housingAndUtilities">Housing &amp; Utilities</Select.Option>
                                        <Select.Option value="vehicleAndTransportation">Vehicle &amp; Transportation</Select.Option>
                                        <Select.Option value="communicationAndPC">Communication &amp; PC</Select.Option>
                                        <Select.Option value="entertainementAndLife">Entertainment &amp; Life</Select.Option>
                                        <Select.Option value="investments">Investments</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Date" className={styles.homepageTypeDate}>
                                    <DatePicker style={{ width: "310px" }} />
                                </Form.Item>

                                <Form.Item label="Time" {...config}>
                                    <TimePicker style={{ width: "310px" }} />
                                </Form.Item>

                                <div className={styles.addRecordsButtonContainer}>
                                    <Form.Item>
                                        <Button onClick={onSubmit} type="primary" htmlType="submit" className={styles.addRecordsButton}>
                                            Add record
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}
