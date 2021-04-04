import React from 'react'
import { Select } from 'antd'
import styles from './homepage.module.scss'
import Moment from 'moment'
import { extendMoment } from 'moment-range';
const { Option } = Select;
const moment = extendMoment(Moment);

export default function DateFilter({ selectedDateFilter, onChange }) {
    return (
        <div className={styles.filtersSelectComp}>
            <Select defaultValue="month" style={{ width: 320 }} bordered={false} onChange={() => onChange(365)}>
                <Option value="week">Last Week</Option>
                <Option value="month">Last Month</Option>
                <Option value="year">Last Year</Option>
            </Select>
        </div>
    )
}
