import React, { useState, useEffect } from 'react'
import AnalyticsFilters from './AnalyticsFilters'
import AnalyticsList from './AnalyticsList'
import styles from './analytics.module.scss'
import { database } from '../firebase'
import firebase from '../firebase'

export default function Analytics() {
    const [bills, setBills] = useState([]);
    const [allBills, setAllBills] = useState([]);
 
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

    useEffect(() => {
        const userUID = firebase.auth().currentUser.uid;
    
        // GET ALL BILLS
        database
          .collection("bills")
          .where('createdBy', '==', userUID)
          .get()
          .then(snpashot => {
            let allBills = [];
    
            snpashot.forEach(bill => {
              allBills.push(bill.data());
            })
            setAllBills(allBills);
          })
      }, [])

    return (
        <>
            <div className={styles.analyticsPageContainer}>
                <AnalyticsFilters bills={bills} setBills={setBills} allBills={allBills} />
                <AnalyticsList bills={bills} setBills={setBills} allBills={allBills} />
            </div>
        </>
    )
}