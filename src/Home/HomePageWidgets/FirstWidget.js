import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import styles from "../homepage.module.scss"

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'

export default function FirstWidget({ bills }) {
    const allExpenses = Math.abs(bills.filter(data => data.type === "expense").reduce(((acc, curr) => acc + Number(curr.amount)), 0))
    const allIncomes = bills.filter(data => data.type === "income").reduce(((acc, curr) => acc + Number(curr.amount)), 0);

    return (
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
    )
}
