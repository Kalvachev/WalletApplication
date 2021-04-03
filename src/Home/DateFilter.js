import React, { useState } from 'react'
import { Select, Radio } from 'antd'
import styles from './homepage.module.scss'
import Moment from 'moment'
import { extendMoment } from 'moment-range';
const { Option } = Select;
const moment = extendMoment(Moment);

export default function DateFilter({ bills }) {
    const [allBills, setAllBills] = useState([]);
    const [billsLastMonth, setBillsLastMonth] = useState([]);

    // setAllBills(bills);
    // let billsLastWeek = [];
    // function weekFilter() {
    //     let startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    //         , endDate = new Date(Date.now())
    //         , range = moment().range(startDate, endDate);

    //     // bills.forEach(bill => {
    //     //     if (range.contains(new Date(bill.date))) {
    //     //         billsLastWeek.push(bill);
    //     //     }
    //     // })
    //     console.log('start:', startDate);
    //     console.log('end:', endDate);

    // }

    return (
        <div className={styles.filtersSelectComp}>
            <Select defaultValue="month" style={{ width: 320 }} bordered={false}>
                <Option value="week">Last Week</Option>
                <Option value="month">Last Month</Option>
                <Option value="year">Last Year</Option>
            </Select>
        </div>
    )
}
