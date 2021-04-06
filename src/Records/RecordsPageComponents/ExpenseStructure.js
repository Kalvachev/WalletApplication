import React from 'react'
import { Doughnut, defaults } from 'react-chartjs-2';
import { Card } from 'antd';
import styles from '../records.module.scss'

import { combineCategories, sumExpense } from '../../Home/CombineSameNames'

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'

export default function ExpenseStructure({ bills }) {
    return (
        <div>
            <div className={styles.doughnutGraph}>
                <h2>Expense Structure</h2>

                <Card>
                    <Doughnut
                        data={{
                            labels: combineCategories('expense', bills),
                            datasets: [
                                {
                                    label: '# of votes',
                                    data: sumExpense(bills),
                                    backgroundColor: [
                                        'rgba(255, 99, 132)',
                                        'rgba(54, 162, 235)',
                                        'rgba(255, 206, 86)',
                                        'rgba(75, 192, 192)',
                                        'rgba(153, 102, 255)',
                                        'rgba(255, 159, 64)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132)',
                                        'rgba(54, 162, 235)',
                                        'rgba(255, 206, 86)',
                                        'rgba(75, 192, 192)',
                                        'rgba(153, 102, 255)',
                                        'rgba(255, 159, 64)',
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        height={300}
                        width={300}
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
                </Card>
            </div>
        </div>
    )
}
