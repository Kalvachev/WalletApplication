import React, { useState, useMemo, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import DateFilter from './DateFilter'
import styles from "./homepage.module.scss"
import moment from 'moment';
import firebase, { database } from '../firebase'
import { Pie, Doughnut, Bar, defaults } from 'react-chartjs-2';

import FirstWidget from "./HomePageWidgets/FirstWidget";
import SecondWidget from "./HomePageWidgets/SecondWidget";
import ThirdWidget from "./HomePageWidgets/ThirdWidget";
import FourthWidget from "./HomePageWidgets/FourthWidget";
import FifthWidget from "./HomePageWidgets/FifthWidget";
import SixthWidget from "./HomePageWidgets/SixthWidget";

const ResponsiveGridLayout = WidthProvider(Responsive);

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'

export default function GridLayout({ bills }) {
    const [selectedDateFilter, setSelectedDateFilter] = useState(null);
    const [currentUsername, setCurrentUsername] = useState('')
    const currentUserId = firebase.auth().currentUser.uid;

    const layout = [
        { i: "a", x: 0, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "b", x: 4, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "c", x: 8, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "d", x: 0, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "e", x: 4, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "f", x: 8, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
    ];

    // const filteredBills = useMemo(() => {
    //     return bills.filter(bill => {
    //         console.log(selectedDateFilter)
    //         return moment(bill.date).isBetween(moment().subtract(selectedDateFilter, 'd'), moment.now());
    //     })
    // }, [selectedDateFilter])

    // console.log(selectedDateFilter)

    useEffect(() => {
        database
            .collection("users").where('id', '==', currentUserId).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setCurrentUsername(doc.data().name)
                });
            });
    }, [])

    return (
        <div className={styles.gridContainer} style={{ background: "rgb(245, 245, 245)" }}>
            <div className={styles.heading}><h2>Hello, {currentUsername}!</h2></div>
            <DateFilter selectedDateFiler={selectedDateFilter} onChange={(ev) => setSelectedDateFilter(ev.target.value)} />
            {/* <DateFilter bills={bills} /> */}
            <ResponsiveGridLayout className="layout"
                layouts={layout}
                breakpoints={{ lg: 1200 }}
                cols={{ lg: 12 }}
                rowHeight={281}
                width={1200}>

                <div
                    key="a"
                    data-grid={{ i: "a", x: 0, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.firstWidgetContainer}
                    className={styles.widgetContainer}
                >
                    <FirstWidget bills={bills} />
                </div>

                <div
                    key="b"
                    data-grid={{ i: "b", x: 4, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <SecondWidget bills={bills} />
                </div>

                <div
                    key="c"
                    data-grid={{ i: "c", x: 8, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.homePageLastRecordsContainer}
                    className={styles.widgetContainer}
                >
                    <ThirdWidget bills={bills} />
                </div>

                <div
                    key="d"
                    data-grid={{ i: "d", x: 0, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <FourthWidget bills={bills} />
                </div>

                <div
                    key="e"
                    data-grid={{ i: "e", x: 4, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <FifthWidget bills={bills} />
                </div>

                <div
                    key="f"
                    data-grid={{ i: "f", x: 8, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <SixthWidget bills={bills} />
                </div>
            </ResponsiveGridLayout>
        </div>
    );
}


