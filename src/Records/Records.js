import React from 'react'
import { Line, Doughnut, defaults } from 'react-chartjs-2';
import { Card } from 'antd';
import { data } from '../data'

import styles from './records.module.scss'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const set = new Set(data.map(d => d.date));

export default function Records() {
    return (
        <div className={styles.recordsPageContainer}>
            {/* Left Graph Doughnut */}
            <div className={styles.recordsLeftGraphDoughnut}>
                <h2>Income</h2>
                <Card>
                    <Doughnut
                        data={{
                            labels: data.filter(data => data.type == "Income").map(data => data.title),
                            datasets: [
                                {
                                    label: '# of votes',
                                    data: data.filter(data => data.type == "Income").map(data => data.money),
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
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
                        height={300}
                        width={300}
                        options={{
                            tooltips: {
                                callbacks: {
                                    label: function(tooltipItem, data) {
                                        var label = data.datasets[tooltipItem.datasetIndex].label || '';
                    
                                        if (label) {
                                            label += ': ';
                                        }
                                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                                        return label;
                                    }
                                }
                            }
                        }}
                    />
                </Card>
            </div>

            {/* Center Graph Line */}
            <div className={styles.recordsCenterGraphLinearContainer}>
                <h2>Hello user, your balance is: {data.reduce((acc, curr) => acc + curr.money, 0)}$</h2>

                <Line className={styles.recordsCenterGraphLinear}
                    data={{
                        labels: Array.from(set),
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
                                data: data.map(d => d.money),
                            }
                        ]
                    }}
                    options={{
                        maintainAspectRatio: false,
                    }}
                />
            </div>

            {/* Right Graph Doughnut */}
            <div className={styles.recordsRightGraphDoughnut}>
                <h2>Expense</h2>

                <Card>
                    <Doughnut
                        data={{
                            labels: data.filter(data => data.type == "Expense").map(data => data.title),
                            datasets: [
                                {
                                    label: '# of votes',
                                    data: data.filter(data => data.type == "Expense").map(data => data.money),
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
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
                        height={300}
                        width={300}
                        options={{
                            maintainAspectRatio: false,
                        }}
                    />
                </Card>
            </div>
        </div>
    )
}



{/* <Bar
    data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'red'
            }
        ]
    }}
    height={400}
    width={600}
    options={{ maintainAspectRatio: false }}
/> */}