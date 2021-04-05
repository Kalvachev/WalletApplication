import React, { useMemo } from 'react';
import styles from "../homepage.module.scss"
import { Line, defaults } from 'react-chartjs-2';


defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'

export default function FourthWidget({ bills }) {
    return (
        <div>
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
    )
}
