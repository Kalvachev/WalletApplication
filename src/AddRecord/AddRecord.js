import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { database } from '../firebase'
import { ExpenseOptions, IncomeOptions } from './TypeExpenseOptions'
import { subDays, addDays } from 'date-fns'
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
    const [activeTab, setActiveTab] = useState('expense')

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    const [visible, setVisible] = useState(false);


    const onSubmit = () => {
        const userUID = firebase.auth().currentUser.uid;

        // GET ALL BILLS
        database
            .collection("bills")
            .where('createdBy', '==', userUID)
            .get()
            .then(snpashot => {
                let bills = [];

                snpashot.forEach(bill => {
                    bills.push(bill.data());
                })
                console.log(
                    'Bills', bills
                )
            })


        // GET Request
        // database
        //     .collection("users")
        //     .doc(userUID)
        //     .get()
        //     .then(res => console.log(res.data()))

        // console.log('Date: ', )
        // console.log('Time: ', )

        let jsDate = moment(date).format('L');
        let jsTime = moment(time).format('LT');

        database
            .collection("bills")
            .add({
                type: activeTab,
                createdBy: userUID,
                title: title,
                amount: amount,
                categorie: categorie,
                date: jsDate,
                time: jsTime,

            })
            .then(() => {
                console.log("Successfully set!");
            })
            .catch((error) => {
                console.error("Error on writing: ", error);
            });

        // setVisible(false);
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
                                <Tabs type="card" activeKey={activeTab} onChange={setActiveTab}>
                                    <TabPane tab="expense" key="expense" className={styles.expenseTab}>
                                        <Form.Item label="Amount" className={styles.homepageTypeAmount}>
                                            <Input type="number" value={amount} onChange={(ev) => setAmount(ev.target.value)} />
                                        </Form.Item>
                                    </TabPane>

                                    <TabPane tab="income" key="income" className={styles.expenseTab}>
                                        <Form.Item label="Amount" className={styles.homepageTypeAmount}>
                                            <Input type="number" value={amount} onChange={(ev) => setAmount(ev.target.value)}
                                                className={styles.homepageTypeAmountInput} />
                                        </Form.Item>
                                    </TabPane>
                                </Tabs>
                            </div>

                            <div id={styles.bottomRecordsPart}>
                                <Form.Item label="Title" className={styles.homepageTypeDate}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                    name="Title"
                                >
                                    <Input
                                        value={title}
                                        onInput={(ev) => setTitle(ev.target.value)}
                                        style={{ width: "310px" }} />
                                </Form.Item>

                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                    label="Category"
                                    name="Category"
                                    className={styles.homepageTypeExpense}>

                                    {activeTab === 'expense' ? <ExpenseOptions setCategorie={setCategorie} /> : <IncomeOptions setCategorie={setCategorie} />}
                                </Form.Item>

                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                    label="Date"
                                    name="Date"
                                    className={styles.homepageTypeDate}>
                                    <DatePicker style={{ width: "310px" }} onChange={setDate} disabledDate={d => !d || d.isAfter(addDays(new Date(), 7)) || d.isSameOrBefore(subDays(new Date(), 1))} />
                                </Form.Item>

                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                    label="Time" {...config}
                                    name="Time"
                                >

                                    <TimePicker style={{ width: "310px" }} onChange={setTime} />
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
