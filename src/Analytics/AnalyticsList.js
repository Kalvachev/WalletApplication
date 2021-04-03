import React, { useEffect, useState } from 'react'
import { List, DeleteOutlined } from 'antd';
import styles from './analytics.module.scss'
import {
    BiDrink, BiShoppingBag, BiCar, BiBookOpen,
    BiMoney, BiHappy, BiDollar, BiCoinStack, BiEuro,
    BiBuildings, BiBuildingHouse, BiTrashAlt
} from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { database } from "../firebase";
import firebase from '../firebase';

export default function AnalyticsList({ bills, setBills }) {
    const [list, setList] = useState(bills);
    let sortedBills = [];

    const sortBillsByDate = () => {
        sortedBills = bills.sort((a, b) => (a.date < b.date) ? 1 : -1)
    }

    const deleteHandler = (id) => {
        console.log(id)
    }

    console.log(deleteHandler)

    sortBillsByDate()

    return (
        <>
            <div className={styles.analyticsListContainer}>
                <List className={styles.analyticsList}
                    itemLayout="horizontal"
                    dataSource={sortedBills}
                    renderItem={item => (
                        <List.Item>
                            {item.categorie === 'foodAndDrinks' ? <FaPizzaSlice size='1.9em' style={{ marginRight: '1em' }} /> :
                                item.categorie === 'shopping' ? <BiShoppingBag size='2.2em' style={{ marginRight: '1em' }} /> :
                                    item.categorie === 'housingAndUtilities' ? <BiBuildingHouse size='2.2em' style={{ marginRight: '1em' }} /> :
                                        item.categorie === 'vehicleAndTransportation' ? <BiCar size='2.2em' style={{ marginRight: '1em' }} /> :
                                            item.categorie === 'communicationAndPC' ? <BiBookOpen size='2.2em' style={{ marginRight: '1em' }} /> :
                                                item.categorie === 'entertainementAndLife' ? <BiHappy size='2.2em' style={{ marginRight: '1em' }} /> :
                                                    item.categorie === 'investments' ? <BiMoney size='2.2em' style={{ marginRight: '1em' }} /> :
                                                        item.categorie === 'salary' ? <BiDollar size='2.2em' style={{ marginRight: '1em' }} /> :
                                                            item.categorie === 'lotteryAndGambling' ? <BiCoinStack size='2.2em' style={{ marginRight: '1em' }} /> :
                                                                item.categorie === 'interestsAndDividents' ? <BiEuro size='2.2em' style={{ marginRight: '1em' }} /> :
                                                                    <BiBuildings size='2.2em' style={{ marginRight: '1em' }} />
                            }
                            <List.Item.Meta
                                title={item.title}
                                description={item.type}
                            />
                            <div className={styles.date}>{item.date}</div>
                            <div className={styles.time}>{item.time}</div>
                            <div className={styles.priceContainer}>{item.amount}лв</div>
                            <div className={styles.deletebtn} ><BiTrashAlt size='1.5em' style={{ marginLeft: '1em' }} onClick={() => deleteHandler(item.id)} /></div>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}
