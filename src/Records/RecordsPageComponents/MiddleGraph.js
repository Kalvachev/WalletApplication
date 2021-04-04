import React from 'react'
import styles from '../records.module.scss'
import { Line, defaults } from 'react-chartjs-2';

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'

export default function MiddleGraph({ bills }) {
    const allExpenses = Math.abs(bills.filter(data => data.type === "expense").reduce(((acc, curr) => acc + Number(curr.amount)), 0))
    const allIncomes = bills.filter(data => data.type === "income").reduce(((acc, curr) => acc + Number(curr.amount)), 0);

    return (
        <div>
            <div className={styles.recordsCenterGraphLinearContainer}>
                <h2>Hello user, your balance is: {Number(allIncomes - allExpenses)}$</h2>

                <Line className={styles.recordsCenterGraphLinear}
                    data={{
                        labels: Array.from(new Set(bills.map(d => d.date))),
                        datasets: [
                            {
                                label: "My total balance",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "rgba(75, 192, 192, 0.4)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "rgba(75,192,192,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHitRadius: 10,
                                data: bills.map(d => d.amount),
                            }
                        ]
                    }}
                    options={{
                        maintainAspectRatio: false,
                    }}
                />
            </div>
        </div>
    )
}
