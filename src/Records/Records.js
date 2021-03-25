import React from 'react'
import { Line, Doughnut, defaults } from 'react-chartjs-2';
import { Form, Input, Button, Row, Col, Card } from 'antd';

import styles from './records.module.scss'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

export default function Records() {
    return (
        <div className={styles.recordsPageContainer}>
            {/* Left Graph Doughnut */}
            <div className={styles.recordsLeftGraphDoughnut}>
                <Card>
                    <Doughnut
                        data={{
                            labels: ['Red', 'Yellow', 'Blue'],
                            datasets: [
                                {
                                    label: '# of votes',
                                    data: [10, 20, 30],
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
                                    borderWidth: 2,
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

            {/* Center Graph Line */}
            <div className={styles.recordsCenterGraphLinearContainer}>
                    <Line className={styles.recordsCenterGraphLinear}
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June", "July"],
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
                                    data: [65, 59, 80, 81, 56, 55, 40],
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
                <Card>
                    <Doughnut
                        data={{
                            labels: ['Red', 'Yellow', 'Blue'],
                            datasets: [
                                {
                                    label: '# of votes',
                                    data: [10, 20, 30],
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
                                    borderWidth: 2,
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