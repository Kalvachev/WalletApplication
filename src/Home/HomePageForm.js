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
    Input
} from 'antd';

import styles from './homepage.module.scss';

const { TabPane } = Tabs;

export default function HomePageForm() {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <Row type="flex" justify="center" align="middle" className={styles.homePageRow}>
                <Col>
                    <Card className={styles.homePageCard}>
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
                                    style={{ width: "530px" }}
                                    className={styles.homepageTypeExpense}>
                                    <Select>
                                        <Select.Option value="demo">Food &amp; Drinks</Select.Option>
                                        <Select.Option value="demo">Shopping</Select.Option>
                                        <Select.Option value="demo">Housing &amp; Utilities</Select.Option>
                                        <Select.Option value="demo">Vehicle &amp; Transportation</Select.Option>
                                        <Select.Option value="demo">Communication &amp; PC</Select.Option>
                                        <Select.Option value="demo">Entertainment &amp; Life</Select.Option>
                                        <Select.Option value="demo">Investments</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="Notes"
                                    name="notes"
                                    className={styles.homepageNotes}
                                    style={{ width: "530px" }}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item label="Date" className={styles.homepageTypeDate}>
                                    <DatePicker 
                                    style={{ width: "310px" }}/>
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
                    </Card>
                </Col>
            </Row>
        </>
    )
}