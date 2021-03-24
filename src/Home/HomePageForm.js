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
                            <Form.Item label="InputNumber">
                                <InputNumber />
                            </Form.Item>
                            <Form.Item label="Select">
                                <Select>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    <Select.Option value="demo">Demo</Select.Option>

                                </Select>
                            </Form.Item>

                            <Form.Item label="Select">
                                <Select>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    <Select.Option value="demo">Demo</Select.Option>

                                </Select>
                            </Form.Item>


                            <Form.Item label="DatePicker">
                                <DatePicker />
                            </Form.Item>

                            <Form.Item label="Button">
                                <Button>Button</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}