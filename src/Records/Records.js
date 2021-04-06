import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import { database } from '../firebase'
import styles from './records.module.scss'
import IncomeStructure from './RecordsPageComponents/IncomeStructure';
import ExpenseStructure from './RecordsPageComponents/ExpenseStructure';
import MiddleGraph from './RecordsPageComponents/MiddleGraph';

export default function Records({user}) {
    const [bills, setBills] = useState([]);
    const [currentUsername, setCurrentUsername] = useState('');
    const currentUser = firebase.auth().currentUser;

    useEffect(() => {
        let userUID = '';

        if (currentUser) {
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
                setBills(bills)
            })
    }, [])

    useEffect(() => {
        database
            .collection("users").where('id', '==', user.uid).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setCurrentUsername(doc.data().name)
                });
            });
    }, [])

    return (
        <div className={styles.recordsPageContainer}>
            <IncomeStructure bills={bills} />
            <MiddleGraph bills={bills} currentUsername={currentUsername}/>
            <ExpenseStructure bills={bills} />
        </div>
    )
}