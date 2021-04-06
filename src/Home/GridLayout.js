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
    const [selectedDateFilter, setSelectedDateFilter] = useState(7);

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
    //         console.log(bill.date)
    //         return moment(bill.date).isBetween(moment().subtract(selectedDateFilter, 'd'), moment.now());
    //     })
    // }, [selectedDateFilter])

    let filtered = [];

    function filter() {
        filtered = bills.filter(bill => moment(bill.date).isBetween(moment().subtract(selectedDateFilter, 'd'), moment.now()))
    }
    filter()

    console.log(selectedDateFilter)
    return (
        <div className={styles.gridContainer} style={{ background: "rgb(245, 245, 245)" }}>
            <Select defaultValue="7" style={{ width: 320 }} bordered={false} onChange={(value) => setSelectedDateFilter(Number(value))}>
                <Option value="7">Last Week</Option>
                <Option value="30">Last Month</Option>
                <Option value="90">Last Three Months</Option>
            </Select>
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
                    <IncomeExpenseWidget bills={filtered} />
                </div>

                <div
                    key="b"
                    data-grid={{ i: "b", x: 4, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <CurrentBalanceWidget bills={filtered} />
                </div>

                <div
                    key="c"
                    data-grid={{ i: "c", x: 8, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.homePageLastRecordsContainer}
                    className={styles.widgetContainer}
                >
                    <CashFlowWidget bills={filtered} />
                </div>

                <div
                    key="d"
                    data-grid={{ i: "d", x: 0, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <LastRecordsWidget bills={filtered} />
                </div>

                <div
                    key="e"
                    data-grid={{ i: "e", x: 4, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <ExpenseStructureWidget bills={filtered} />
                </div>

                <div
                    key="f"
                    data-grid={{ i: "f", x: 8, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <IncomeStructureWidget bills={filtered} />
                </div>
            </ResponsiveGridLayout>
        </div>
    );
}


