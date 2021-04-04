import React, { useState, useEffect } from 'react'
import AnalyticsFilters from './AnalyticsFilters'
import AnalyticsList from './AnalyticsList'
import styles from './analytics.module.scss'
import firebase from "../firebase";
import { database } from '../firebase'

export default function Analytics({ user }) {
    const [bills, setBills] = useState([]);
    const [allBills, setAllBills] = useState(bills);

    useEffect(() => {
        let userUID = '';

        if (user) {
            userUID = firebase.auth().currentUser.uid;
        }

        database
            .collection("bills")
            .where('createdBy', '==', userUID)
            .get()
            .then(snapshot => {
                let bills = [];

                snapshot.forEach(bill => {
                    bills.push(bill.data());
                })
                setBills(bills);
                setAllBills(bills);
            })
    }, [])

    return (
        <>
            <div className={styles.analyticsPageContainer}>
                <AnalyticsFilters bills={bills} setBills={setBills} allBills={allBills} setAllBills={setAllBills} />
                <AnalyticsList bills={bills} setBills={setBills} allBills={allBills} setAllBills={setAllBills} />
            </div>
        </>
    )
}