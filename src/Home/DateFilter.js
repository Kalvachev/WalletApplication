import React, { useState } from 'react'
import { Select, Radio } from 'antd'
import styles from './homepage.module.scss'
const { Option } = Select;

export default function DateFilter() {
    const [value, setValue] = useState('')
    const periodOptions = [
        { label: 'Range', value: 'Range' },
        { label: 'Weeks', value: 'Weeks' },
        { label: 'Months', value: 'Months' },
    ];

    function onChange(e) {
        setValue(e.target.value)
    };

    function onClickHanler() {

    }

    return (
        <div className={styles.filtersSelectComp}
            onClick={onClickHanler}>

            <Radio.Group
                className={styles.filtersRadioBtns}
                options={periodOptions}
                onChange={onChange}
                value={value}
                optionType="button"
                buttonStyle="solid"
            />
            <Select defaultValue="month" style={{ width: 320 }} bordered={false}>
                <Option value="week">Last Week</Option>
                <Option value="month">Last Month</Option>
                <Option value="year">Last Year</Option>
            </Select>
        </div>
    )
}
