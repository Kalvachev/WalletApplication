import React, { useState } from 'react';

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

import styles from './addrecord.module.scss';

const { TabPane } = Tabs;

export default function AddRecord() {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    const [visible, setVisible] = useState(false);

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
                                            <InputNumber />
                                        </Form.Item>
                                    </TabPane>

                                    <TabPane tab="Income" key="2" className={styles.expenseTab}>
                                        <Form.Item label="Amount" className={styles.homepageTypeAmount}>
                                            <InputNumber className={styles.homepageTypeAmountInput} />
                                        </Form.Item>
                                    </TabPane>
                                </Tabs>
                            </div>

                            <div id={styles.bottomRecordsPart}>
                                <Form.Item
                                    label="Category"
                                    name="category"
                                    className={styles.homepageTypeExpense}>

                                    <Select style={{ width: "310px" }} >
                                        <Select.Option value="demo">Food &amp; Drinks</Select.Option>
                                        <Select.Option value="demo">Shopping</Select.Option>
                                        <Select.Option value="demo">Housing &amp; Utilities</Select.Option>
                                        <Select.Option value="demo">Vehicle &amp; Transportation</Select.Option>
                                        <Select.Option value="demo">Communication &amp; PC</Select.Option>
                                        <Select.Option value="demo">Entertainment &amp; Life</Select.Option>
                                        <Select.Option value="demo">Investments</Select.Option>
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
                                        <Button type="primary" htmlType="submit" className={styles.addRecordsButton}>
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
