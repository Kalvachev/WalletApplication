import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import styles from "../homePage.module.scss";

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom';

export default function IncomeExpenseWidget({ bills }) {
    const allExpenses = Math.abs(bills.filter(data => data.type === "expense").reduce(((acc, curr) => acc + Number(curr.amount)), 0))
    const allIncomes = bills.filter(data => data.type === "income").reduce(((acc, curr) => acc + Number(curr.amount)), 0);

    return (
        <div>
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
                                labelColor() {
                                    return {
                                        borderColor: 'rgb(255, 0, 0)',
                                        backgroundColor: 'rgb(255, 0, 0)'
                                    };
                                },
                                labelTextColor() {
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
