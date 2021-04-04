import React, { useMemo } from 'react';
import styles from "../homepage.module.scss"

export default function FourthWidget({ bills }) {
    return (
        <div>
            <div className={styles.widgetChartHeadingContainer}>
                <h2>Some kind of line chart</h2>
            </div>

            <div className={styles.fourthWidgetChartContainer}>

            </div>
        </div>
    )
}
