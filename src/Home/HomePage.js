import React, { useEffect, useState } from 'react'
import DateFilter from './DateFilter'
import GridLayout from './GridLayout'
import firebase from '../firebase'
import { database } from '../firebase'

export default function HomePage() {
    const [bills, setBills] = useState([])
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

    return (
        <>
            <div >
                <GridLayout bills={bills} setBills={setBills} />
            </div>
        </>
    )
}