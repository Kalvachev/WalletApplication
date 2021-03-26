import React from 'react'
import { List, Avatar } from 'antd';
import styles from './analytics.module.scss'
import { data } from '../data'

export default function AnalyticsList() {
    return (
        <>
            <div className={styles.analyticsListContainer}>
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
                />
            </div>
        </>
    )
}
