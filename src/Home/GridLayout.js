import React, { useState, useMemo, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Select } from 'antd'
import styles from "./homepage.module.scss"
import moment from 'moment';
import { defaults } from 'react-chartjs-2';

import IncomeExpenseWidget from "./HomePageWidgets/IncomeExpenseWidget";
import CashFlowWidget from "./HomePageWidgets/CashFlowWidget";
import LastRecordsWidget from "./HomePageWidgets/LastRecordsWidget";
import CurrentBalanceWidget from "./HomePageWidgets/CurrentBalanceWidget";
import ExpenseStructureWidget from "./HomePageWidgets/ExpenseStructureWidget";
import IncomeStructureWidget from "./HomePageWidgets/IncomeStructureWidget";

const ResponsiveGridLayout = WidthProvider(Responsive);
const { Option } = Select;

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'

export default function GridLayout({ bills }) {
    const [selectedDateFilter, setSelectedDateFilter] = useState('week');

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

    // console.log(filteredBills)

    return (
        <div className={styles.gridContainer} style={{ background: "rgb(245, 245, 245)" }}>
            <div className={styles.dateFilterContainer}>
                <Select as='select' defaultValue="week" style={{ width: 320 }} bordered={false} onChange={(value) => setSelectedDateFilter(value)} className={styles.selectDate}>
                    <Option value="week">Last Week</Option>
                    <Option value="month">Last Month</Option>
                    <Option value="year">Last Year</Option>
                </Select>
            </div>

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
                    <IncomeExpenseWidget bills={bills} />
                </div>

                <div
                    key="b"
                    data-grid={{ i: "b", x: 4, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <CurrentBalanceWidget bills={bills} />
                </div>

                <div
                    key="c"
                    data-grid={{ i: "c", x: 8, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.homePageLastRecordsContainer}
                    className={styles.widgetContainer}
                >
                    <CashFlowWidget bills={bills} />
                </div>

                <div
                    key="d"
                    data-grid={{ i: "d", x: 0, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <LastRecordsWidget bills={bills} />
                </div>

                <div
                    key="e"
                    data-grid={{ i: "e", x: 4, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <ExpenseStructureWidget bills={bills} />
                </div>

                <div
                    key="f"
                    data-grid={{ i: "f", x: 8, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <IncomeStructureWidget bills={bills} />
                </div>
            </ResponsiveGridLayout>
        </div>
    );
}


