import React from 'react';
import { Pie, defaults } from 'react-chartjs-2';
import styles from "../homepage.module.scss"
import { combineCategories, sumExpense } from '../CombineSameNames'

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'

export default function ExpenseStructureWidget({ bills }) {
    return (
        <div>
            <div className={styles.widgetChartHeadingContainer}>
                <h2>Expenses Structure</h2>
            </div>

            <div className={styles.fifthWidgetChartContainer}>
                <Pie
                    data={{
                        labels: combineCategories("expense", bills),
                        datasets: [
                            {
                                label: '# of votes',
                                data: sumExpense(bills),
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
    )
}
