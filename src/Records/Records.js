import React from 'react'
import { Doughnut, defaults } from 'react-chartjs-2';
import styles from './records.module.scss'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

export default function Records() {

    // var myDoughnutChart = new Chart(ctx, {
    //     type: 'doughnut',
    //     data: data,
    // });

    return (
        <div className={styles.recordsLeftGraphDoughnut}>
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
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    // scales: {
                    //     yAxes: [
                    //         {
                    //             ticks: {
                    //                 beginAtZero: true,
                    //             },
                    //         },
                    //     ],
                    // },
                    // legend: {
                    //     labels: {
                    //         fontSize: 25,
                    //     },
                    // },
                }}
            />
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