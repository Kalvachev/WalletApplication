import React, { useEffect, useState } from 'react'
import { Line, Doughnut, defaults } from 'react-chartjs-2';
import { Card } from 'antd';
import { data } from '../data'
import firebase from '../firebase'
import { database } from '../firebase'
import styles from './records.module.scss'
import { combineCategories, sumExpense, sumIncome } from '../Home/CombineSameNames'
import IncomeStructure from './RecordsPageComponents/IncomeStructure';
import ExpenseStructure from './RecordsPageComponents/ExpenseStructure';
import MiddleGraph from './RecordsPageComponents/MiddleGraph';

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'


export default function Records({user}) {
    const [bills, setBills] = useState([]);
    const [currentUsername, setCurrentUsername] = useState('');
    const currentUser = firebase.auth().currentUser;

    useEffect(() => {
        let userUID = '';

        if (currentUser) {
            userUID = firebase.auth().currentUser.uid;
        }

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



{/* <Bar
    data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'red'
            }
        ]
    }}
    height={400}
    width={600}
    options={{ maintainAspectRatio: false }}
/> */}