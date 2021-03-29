import React, { useState } from 'react';
import { Form, Input, Select, Button, Card } from 'antd';
import styles from './addStartIncome.module.scss'

const PriceInput = ({ value = {}, onChange }) => {
    const [number, setNumber] = useState(0);

    const triggerChange = (changedValue) => {
        onChange?.({
            number,
            ...value,
            ...changedValue,
        });
    };

    const onNumberChange = (e) => {
        const newNumber = parseInt(e.target.value || '0', 10);

        if (Number.isNaN(number)) {
            return;
        }

        if (!('number' in value)) {
            setNumber(newNumber);
        }

        triggerChange({
            number: newNumber,
        });
    };

    return (
        <span>
            <Input
                type="text"
                value={value.number || number}
                onChange={onNumberChange}
                style={{
                    width: 100,
                }}
            />
        </span>
    );
};

const AddStartIncome = () => {
    const onFinish = (values) => {
        console.log('Received values from form: ', values);
    };

    const checkPrice = (_, value) => {
        if (value.number > 0) {
            return Promise.resolve();
        }

        return Promise.reject(new Error('Price must be greater than zero!'));
    };

    return (
        <div className={styles.addStartIncomeFormContainer}>
            <Card>
                <Form
                    name="customized_form_controls"
                    layout="inline"
                    onFinish={onFinish}
                    initialValues={{
                        price: {
                            number: 0,
                        },
                    }}
                >
                    <Form.Item
                        name="price"
                        label="Add starting value:"
                        rules={[
                            {
                                validator: checkPrice,
                            },
                        ]}
                    >
                        <PriceInput />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add starting value
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default AddStartIncome;