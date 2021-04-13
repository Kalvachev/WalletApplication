import React from 'react';
import styles from "../home.module.scss";
import { Progress } from 'antd';

export default function CashFlowWidget({ bills }) {
    const allExpenses = Math.abs(bills.filter(data => data.type === "expense").reduce(((acc, curr) => acc + Number(curr.amount)), 0))
    const allIncomes = bills.filter(data => data.type === "income").reduce(((acc, curr) => acc + Number(curr.amount)), 0);

    const cashFlowBars = () => {
        let bar1 = 0;
        let bar2 = 0;

        if (allExpenses === 0 && allIncomes === 0) {
            bar1 = 0;
            bar2 = 0;
        } else if (allExpenses === 0 && allIncomes) {
            bar1 = 100;
            bar2 = 0;
        } else if (allIncomes === 0 && allExpenses) {
            bar1 = 0;
            bar2 = 100;
        } else if (allIncomes && allExpenses && allIncomes > allExpenses) {
            bar1 = 100;
            bar2 = 100 / (allIncomes / allExpenses);
        } else if (allIncomes && allExpenses && allIncomes < allExpenses) {
            bar1 = 100 / (allExpenses / allIncomes);
            bar2 = 100;
        }
        return [bar1, bar2]
    }

    const expencePercent = cashFlowBars()[0];
    const incomePercent = cashFlowBars()[1];

    return (
        <div>
            <div className={styles.widgetChartHeadingContainer}>
                <h2>Cash Flow</h2>
            </div>

            <div className={styles.secondWidgetChartContainer}
            >
                <div>
                    <div className={styles.incomeBarContainer}>
                        <h3>Income: {allIncomes}$</h3>
                        <Progress percent={expencePercent} showInfo={false} />
                    </div>

                    <div>
                        <h3>Expense: {allExpenses}$</h3>
                        <Progress percent={incomePercent} showInfo={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}
