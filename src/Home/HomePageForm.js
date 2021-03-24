import React, { useState } from 'react';

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Row,
    Col,
    Card
} from 'antd';

import styles from './homepage.module.scss';


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
                                span: 4,
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
                            <h2 className={styles.homepageHeading}>
                                Hello, username!
                                Your Balance is 0$
                            </h2>

                            <div id={styles.firstHomePageItemsRow}>
                                <Form.Item label="Type" className={styles.homepageType}>
                                    <Select>
                                        <Select.Option value="income">Income</Select.Option>
                                        <Select.Option value="expense">Expense</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Select" className={styles.homepageTypeExpense}>
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
                            </div>

                            <div id={styles.secondHomePageItemsRow}>
                                <Form.Item label="Amount" className={styles.homepageTypeAmount}>
                                    <InputNumber className={styles.homepageTypeAmountInput}/>
                                </Form.Item>

                                <Form.Item label="Date" className={styles.homepageTypeDate}>
                                    <DatePicker />
                                </Form.Item>
                            </div>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}