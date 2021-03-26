import React from 'react'
import { List, Avatar } from 'antd';
import styles from './analytics.module.scss'

const data = [
    {
        title: 'Got Salary',
        money: 2000,
        type: 'Income',
        date: '11.03.2021',
        time: '13:00'
    },
    {
        title: 'Bought a book',
        money: -15,
        type: 'Expense',
        date: "11.03.2021",
        time: '13:00'
    },
    {
        title: 'Went shopping',
        money: -250,
        type: 'Expense',
        date: "11.03.2021",
        time: '13:00'
    },
    {
        title: 'Paid the bills',
        money: - 50,
        type: 'Expense',
        date: "12.03.2021",
        time: '13:00'
    },
    {
        title: 'Won a bet',
        money: 150,
        type: 'Income',
        date: "12.03.2021",
        time: '13:00'
    },
    {
        title: 'Paid the rent',
        money: - 500,
        type: 'Expense',
        date: "13.03.2021",
        time: '13:00'
    },
    {
        title: 'Bought groceries',
        money: - 50,
        type: 'Expense',
        date: "13.03.2021",
        time: '13:00'
    },
];
export default function AnalyticsList() {
    return (
        <>
            <List className={styles.analyticsList}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.type}
                            description={item.title}

                        />
                        <div className={styles.date}>{item.date}</div>
                        <div className={styles.time}>{item.time}</div>
                        <div className={styles.priceContainer}>{item.money}лв</div>
                    </List.Item>
                )}
            />,
        </>
    )
}
