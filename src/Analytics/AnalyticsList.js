import React, { useEffect, useState } from 'react'
import { List, Avatar } from 'antd';
import styles from './analytics.module.scss'
import { data } from '../data'
import firebase from '../firebase'
import { database } from '../firebase'

export default function AnalyticsList() {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        const userId = firebase.auth().currentUser.uid;

        database.collection('users')
            .get()
            .then((users) => {
                users.forEach((user) => {
                    if (user.id === userId) {
                        let bills = user.data().bills
                        console.log(bills);
                    }
                });
            })
    }, [])

    return (
        <>
            <div className={styles.analyticsListContainer}>
                <List className={styles.analyticsList}
                    itemLayout="horizontal"
                    dataSource={bills}
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
