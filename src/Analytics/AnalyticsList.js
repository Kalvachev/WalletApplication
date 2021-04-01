import React from 'react'
import { List } from 'antd';
import styles from './analytics.module.scss'
import {
    BiDrink, BiShoppingBag, BiCar, BiBookOpen,
    BiMoney, BiHappy, BiDollar, BiCoinStack, BiEuro,
    BiBuildings, BiBuildingHouse
}
    from "react-icons/bi";


export default function AnalyticsList({ bills, setBills }) {
    return (
        <>
            <div className={styles.analyticsListContainer}>
                <List className={styles.analyticsList}
                    itemLayout="horizontal"
                    dataSource={bills}
                    renderItem={item => (
                        <List.Item>
                            {item.categorie === 'foodAndDrinks' ? <BiDrink size='2.2em' style={{marginRight: '1em'}}/> :
                                item.categorie === 'shopping' ? <BiShoppingBag size='2.2em' style={{marginRight: '1em'}}/> :
                                    item.categorie === 'housingAndUtilities' ? <BiBuildingHouse size='2.2em' style={{marginRight: '1em'}}/> :
                                        item.categorie === 'vehicleAndTransportation' ? <biCar size='2.2em'style={{marginRight: '1em'}} /> :
                                            item.categorie === 'communicationAndPC' ? <BiBookOpen size='2.2em'style={{marginRight: '1em'}} /> :
                                                item.categorie === 'entertainementAndLife' ? <BiHappy size='2.2em' style={{marginRight: '1em'}}/> :
                                                    item.categorie === 'investments' ? <BiMoney size='2.2em' style={{marginRight: '1em'}}/> :
                                                        item.categorie === 'salary' ? <BiDollar size='2.2em' style={{marginRight: '1em'}}/> :
                                                            item.categorie === 'lotteryAndGambling' ? <BiCoinStack size='2.2em'style={{marginRight: '1em'}} /> :
                                                                item.categorie === 'interestsAndDividents' ? <BiEuro size='2.2em' style={{marginRight: '1em'}}/> :
                                                                    <BiBuildings size='2.2em' style={{marginRight: '1em'}}/>
                            }
                            <List.Item.Meta
                                title={item.title}
                                description={item.type}
                            />
                            <div className={styles.date}>{item.date}</div>
                            <div className={styles.time}>{item.time}</div>
                            <div className={styles.priceContainer}>{item.amount}лв</div>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}
