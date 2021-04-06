import React, { useMemo } from 'react';
import { List } from 'antd';
import styles from './analytics.module.scss';

import {
    BiShoppingBag, BiCar, BiBookOpen,
    BiMoney, BiHappy, BiDollar, BiCoinStack, BiEuro,
    BiBuildings, BiBuildingHouse, BiTrashAlt
} from "react-icons/bi";

import { FaPizzaSlice } from "react-icons/fa";
import { database } from '../firebase'

const ICON_CATEGORIES = {
    'foodAndDrinks': <FaPizzaSlice size='1.9em' style={{ marginRight: '1em' }} />,
    'shopping': <BiShoppingBag size='2.2em' style={{ marginRight: '1em' }} />,
    'housingAndUtilities': <BiBuildingHouse size='2.2em' style={{ marginRight: '1em' }} />,
    'vehicleAndTransportation': <BiCar size='2.2em' style={{ marginRight: '1em' }} />,
    'communicationAndPC': <BiBookOpen size='2.2em' style={{ marginRight: '1em' }} />,
    'entertainementAndLife': <BiHappy size='2.2em' style={{ marginRight: '1em' }} />,
    'investments': <BiMoney size='2.2em' style={{ marginRight: '1em' }} />,
    'salary': <BiDollar size='2.2em' style={{ marginRight: '1em' }} />,
    'lotteryAndGambling': <BiCoinStack size='2.2em' style={{ marginRight: '1em' }} />,
    'interestsAndDividents': <BiEuro size='2.2em' style={{ marginRight: '1em' }} />,
    'lendingAndRenting': <BiBuildings size='2.2em' style={{ marginRight: '1em' }} />,
}

export default function AnalyticsList({ bills, setBills, setAllBills }) {
    const deleteHandler = (id) => {

        let itemRef = database.collection('bills').where('id', '==', id);
        itemRef.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });

        const filtered = bills.filter((item) => item.id !== id);

        setBills(filtered);
        setAllBills(filtered);
    }

    const sortedBills = useMemo(() => bills.sort((a, b) => (a.date < b.date) ? 1 : -1), [bills])

    return (
        <>
            <div className={styles.analyticsListContainer}>
                <List className={styles.analyticsList}
                    itemLayout="horizontal"
                    dataSource={sortedBills}
                    renderItem={item => (
                        <List.Item>
                            {ICON_CATEGORIES[item.categorie]}
                            <List.Item.Meta
                                title={item.title}
                                description={item.type}
                            />
                            <div className={styles.date}>{item.date}</div>
                            <div className={styles.time}>{item.time}</div>
                            <div className={styles.priceContainer}>{item.amount}$</div>
                            <div className={styles.deletebtn} id={item.id}><BiTrashAlt size='1.5em' style={{ marginLeft: '1em' }} onClick={() => deleteHandler(item.id)} /></div>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}
