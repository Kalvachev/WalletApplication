import React, { useState, useEffect } from 'react'
import AnalyticsFilters from './AnalyticsFilters'
import AnalyticsList from './AnalyticsList'
import styles from './analytics.module.scss'
import { database } from '../firebase'
import firebase from '../firebase'

export default function Analytics() {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        const userUID = firebase.auth().currentUser.uid;

        // GET ALL BILLS
        database
            .collection("bills")
            .where('createdBy', '==', userUID)
            .get()
            .then(snpashot => {
                let bills = [];

                snpashot.forEach(bill => {
                    bills.push(bill.data());
                })
                setBills(bills)
            })
    }, [])

    return (
        <>
            <div className={styles.analyticsPageContainer}>
                <AnalyticsFilters bills={bills} setBills={setBills} />
                <AnalyticsList bills={bills} setBills={setBills} />
            </div>
        </>
    )
}