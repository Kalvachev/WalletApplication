import React from 'react'
import { List } from 'antd';
import styles from './analytics.module.scss'
import { BiDrink } from "react-icons/bi";


export default function AnalyticsList({ bills, setBills }) {


    return (
        <>
            <div className={styles.analyticsListContainer}>
                <List className={styles.analyticsList}
                    itemLayout="horizontal"
                    dataSource={bills}
                    renderItem={item => (
                        <List.Item>
                            <BiDrink size='2em' style={{ marginRight: '25px' }} />
                            <List.Item.Meta
                                title={item.title}
                                description={item.type}
                            />
                            <div className={styles.date}>{item.date}</div>
                            <div className={styles.time}>{item.time}</div>
                            <div className={styles.priceContainer}>{item.amount}лв</div>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}
