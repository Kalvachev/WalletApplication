import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import DateFilter from './DateFilter'
import styles from "./homepage.module.scss"
import {
    BiShoppingBag, BiCar, BiBookOpen,
    BiMoney, BiHappy, BiDollar, BiCoinStack, BiEuro,
    BiBuildings, BiBuildingHouse
} from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { Pie, Doughnut, Bar, defaults } from 'react-chartjs-2';
import { List, Progress } from 'antd';

const ResponsiveGridLayout = WidthProvider(Responsive);

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'

export default function GridLayout({ bills }) {
    const allExpenses = Math.abs(bills.filter(data => data.type === "expense").reduce(((acc, curr) => acc + Number(curr.amount)), 0))
    const allIncomes = bills.filter(data => data.type === "income").reduce(((acc, curr) => acc + Number(curr.amount)), 0);

    let sortedBills = [];

    const sortBillsByDate = () => {
        sortedBills = bills.sort((a, b) => (a.date < b.date) ? 1 : -1)
    }
    const cashFlowBars = () => {
        let bar1 = 0;
        let bar2 = 0;

        if (allExpenses === 0 && allIncomes === 0) {
            bar1 = 0;
            bar2 = 0;
        } else if (allExpenses === 0 && allIncomes) {
            bar1 = 100
            bar2 = 0
        } else if (allIncomes === 0 && allExpenses) {
            bar1 = 0
            bar2 = 100
        } else if (allIncomes && allExpenses && allIncomes > allExpenses) {
            bar1 = 100;
            bar2 = 100 / (allIncomes / allExpenses);
        } else if (allIncomes && allExpenses && allIncomes < allExpenses) {
            bar1 = 100 / (allExpenses / allIncomes);
            bar2 = 100;
        }
        return [bar1, bar2]
    }

    const expencePercent = cashFlowBars()[0];
    const incomePercent = cashFlowBars()[1];

    sortBillsByDate()

    const layout = [
        { i: "a", x: 0, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "b", x: 4, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "c", x: 8, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "d", x: 0, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "e", x: 4, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "f", x: 8, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
    ];

    function combineCategories(type) {
        let combined = new Set(bills.filter(data => data.type == type).map(data => data.categorie));

        let newArr = Array.from(combined);
        return newArr;
    }

    function sumExpense() {
        let foodSum = 0;
        let shoppingSum = 0;
        let housingSum = 0;
        let vehicleSum = 0;
        let communicationSum = 0;
        let entertanmentSum = 0;
        let investmentsSum = 0;
        let finalArr = [];

        let combined = new Set(bills.filter(data => data.type == "expense"))

        let newArr = Array.from(combined)

        newArr.forEach((item) => {
            if (item.categorie === 'foodAndDrinks') {
                foodSum += Number(item.amount);
            } else if (item.categorie === 'shopping') {
                shoppingSum += Number(item.amount)
            } else if (item.categorie === 'housingAndUtilities') {
                housingSum += Number(item.amount)
            } else if (item.categorie === 'vehicleAndTransportation') {
                vehicleSum += Number(item.amount)
            } else if (item.categorie === 'communicationAndPC') {
                communicationSum += Number(item.amount)
            } else if (item.categorie === 'entertainementAndLife') {
                entertanmentSum += Number(item.amount)
            } else if (item.categorie === 'investments') {
                investmentsSum += Number(item.amount)
            }
        })
        let arrOfSums = [foodSum, shoppingSum, housingSum, vehicleSum, communicationSum, entertanmentSum, investmentsSum];
        let filtered = arrOfSums.filter(sum => sum > 0);
        return filtered;
    }

    function sumIncome() {
        let salarySum = 0;
        let lotterySum = 0;
        let interestsSum = 0;
        let rentingSum = 0;


        let combined = new Set(bills.filter(data => data.type == "income"))

        let newArr = Array.from(combined)

        newArr.forEach((item) => {
            if (item.categorie === 'salary') {
                salarySum += Number(item.amount);
            } else if (item.categorie === 'lotteryAndGambling') {
                lotterySum += Number(item.amount)
            } else if (item.categorie === 'interestsAndDividents') {
                interestsSum += Number(item.amount)
            } else if (item.categorie === 'lendingAndRenting') {
                rentingSum += Number(item.amount)
            }
        })
        let arrOfSums = [salarySum, lotterySum, interestsSum, rentingSum];
        let filtered = arrOfSums.filter(sum => sum > 0);
        return filtered;
    }

    return (
        <div className={styles.gridContainer} style={{ background: "rgb(245, 245, 245)" }}>
            <DateFilter bills={bills} />
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

                    <div className={styles.widgetChartHeadingContainer}>
                        <h2>Income/Expense Chart</h2>
                    </div>

                    <div className={styles.firstWidgetChartContainer}>
                        <Doughnut
                            data={{
                                labels: ["Income", "Expense"],
                                datasets: [
                                    {
                                        label: '# of votes',
                                        data: [allIncomes, allExpenses],
                                        backgroundColor: [
                                            'rgba(75, 192, 192)',
                                            'rgba(153, 102, 255)',
                                            'rgba(255, 159, 64)',
                                            'rgba(54, 162, 235)',
                                            'rgba(255, 99, 132)',
                                            'rgba(255, 206, 86)',
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)',
                                        ],
                                        borderWidth: 1,
                                    },
                                ],
                            }}
                            options={{
                                tooltips: {
                                    callbacks: {
                                        labelColor(tooltipItem, chart) {
                                            return {
                                                borderColor: 'rgb(255, 0, 0)',
                                                backgroundColor: 'rgb(255, 0, 0)'
                                            };
                                        },
                                        labelTextColor(tooltipItem, chart) {
                                            return 'lightgray';
                                        }
                                    }
                                },
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                </div>

                <div
                    key="b"
                    data-grid={{ i: "b", x: 4, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <div className={styles.widgetChartHeadingContainer}>
                        <h2>Cash Flow</h2>
                        {/* <h2>Current amount: </h2> */}
                    </div>

                    <div className={styles.secondWidgetChartContainer}
                    >
                        <div>
                            <div>
                                <h3>Income: {allIncomes}</h3>
                                <Progress percent={expencePercent} showInfo={false} />
                            </div>

                            <div>
                                <h3>Expense: {allExpenses}</h3>
                                <Progress percent={incomePercent} showInfo={false} />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    key="c"
                    data-grid={{ i: "c", x: 8, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.homePageLastRecordsContainer}
                    className={styles.widgetContainer}
                >
                    <div className={styles.widgetChartHeadingContainer}>
                        <h2>Last Records</h2>
                    </div>

                    <div className={styles.thirdWidgetChartContainer}>
                        <List
                            itemLayout="horizontal"
                            dataSource={sortedBills.slice(0, 3)}
                            renderItem={item => (
                                <List.Item>
                                    <div>
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
                                    </div>
                                    <List.Item.Meta
                                        title={item.type}
                                        description={item.title}
                                    />
                                    <div className={styles.priceContainer}>{item.amount}лв</div>
                                </List.Item>
                            )}
                        />
                    </div>
                </div>

                <div
                    key="d"
                    data-grid={{ i: "d", x: 0, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "red" }}
                    className={styles.widgetContainer}
                >
                    <div className={styles.widgetChartHeadingContainer}>
                        <h2>Some kind of line chart</h2>
                    </div>

                    <div className={styles.fourthWidgetChartContainer}>

                    </div>
                </div>

                <div
                    key="e"
                    data-grid={{ i: "e", x: 4, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <div className={styles.widgetChartHeadingContainer}>
                        <h2>Expenses Structure</h2>
                    </div>

                    <div className={styles.fifthWidgetChartContainer}>
                        <Pie
                            data={{
                                labels: combineCategories("expense"),
                                datasets: [
                                    {
                                        label: '# of votes',
                                        data: sumExpense(),
                                        backgroundColor: [
                                            'rgba(75, 192, 192)',
                                            'rgba(153, 102, 255)',
                                            'rgba(255, 159, 64)',
                                            'rgba(54, 162, 235)',
                                            'rgba(255, 99, 132)',
                                            'rgba(255, 206, 86)',
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)',
                                        ],
                                        borderWidth: 1,
                                    },
                                ],
                            }}
                            height={200}
                            width={200}
                            options={{
                                tooltips: {
                                    callbacks: {
                                        labelColor(tooltipItem, chart) {
                                            return {
                                                borderColor: 'rgb(255, 0, 0)',
                                                backgroundColor: 'rgb(255, 0, 0)'
                                            };
                                        },
                                        labelTextColor(tooltipItem, chart) {
                                            return 'lightgray';
                                        }
                                    }
                                },
                                maintainAspectRatio: false,

                            }}
                        />
                    </div>
                </div>

                <div
                    key="f"
                    data-grid={{ i: "f", x: 8, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.widgetContainer}
                >
                    <div className={styles.widgetChartHeadingContainer}>
                        <h2>Incomes Structure</h2>
                    </div>

                    <div className={styles.sixthWidgetChartContainer}>
                        <Bar
                            data={{
                                labels: combineCategories('income'),
                                datasets: [
                                    {
                                        label: 'Income Structure',
                                        data: sumIncome(),
                                        backgroundColor: [
                                            'rgba(75, 192, 192)',
                                            'rgba(153, 102, 255)',
                                            'rgba(255, 159, 64)',
                                            'rgba(54, 162, 235)',
                                            'rgba(255, 99, 132)',
                                            'rgba(255, 206, 86)',
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)',
                                        ],
                                        borderWidth: 1,
                                    },
                                ],
                            }}
                            height={200}
                            width={200}
                            options={{
                                tooltips: {
                                    callbacks: {
                                        labelColor(tooltipItem, chart) {
                                            return {
                                                borderColor: 'rgb(255, 0, 0)',
                                                backgroundColor: 'rgb(255, 0, 0)'
                                            };
                                        },
                                        labelTextColor(tooltipItem, chart) {
                                            return 'lightgray';
                                        }
                                    }
                                },
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                </div>
            </ResponsiveGridLayout>
        </div>
    );
}


