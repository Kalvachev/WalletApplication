import React, { useMemo } from 'react';
import styles from "../home.module.scss";
import { List } from 'antd';

import {
    BiShoppingBag, BiCar, BiBookOpen,
    BiMoney, BiHappy, BiDollar, BiCoinStack, BiEuro,
    BiBuildings, BiBuildingHouse
} from "react-icons/bi";

import { FaPizzaSlice } from "react-icons/fa";

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

export default function LastRecordsWidget({ bills }) {
    const sortedBills = useMemo(() => bills.sort((a, b) => (a.date < b.date) ? 1 : -1), [bills])

    return (
        <div>
            <div className={styles.widgetChartHeadingContainer} >
                <h2>Last Records</h2>
            </div>

            <div className={styles.thirdWidgetChartContainer}>
                <List
                    itemLayout="horizontal"
                    dataSource={sortedBills.slice(0, 3)}
                    renderItem={item => (
                        <List.Item>
                            <div>
                                {ICON_CATEGORIES[item.categorie]}
                            </div>
                            <List.Item.Meta
                                title={item.type}
                                description={item.title}
                            />
                            <div className={styles.priceContainer}>{item.amount}$</div>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}
