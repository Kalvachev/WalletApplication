import React from 'react';
import styles from "../home.module.scss";
import { defaults } from 'react-chartjs-2';

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'

export default function CurrentBalanceWidget({ bills }) {
    const allExpenses = Math.abs(bills.filter(data => data.type === "expense").reduce(((acc, curr) => acc + Number(curr.amount)), 0))
    const allIncomes = bills.filter(data => data.type === "income").reduce(((acc, curr) => acc + Number(curr.amount)), 0);

    return (
        <div>
            <div className={styles.fourthWidgetChartContainer}>
                <div className={styles.middleGraphContainer}>
                    <div className={styles.middleGraphContainerTopPart}>
                        <h2>Wallet Application</h2>
                    </div>

                    <div className={styles.middleGraphContainerCenterPart}>
                        <h2>Current balance: {Number(allIncomes - allExpenses)}$</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
