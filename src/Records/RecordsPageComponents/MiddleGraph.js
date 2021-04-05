import React, { useState, useEffect, useMemo } from 'react'
import styles from '../records.module.scss'
import { Line, defaults } from 'react-chartjs-2';
import { Card } from 'antd';
import firebase from '../../firebase'
import { database } from '../../firebase'
defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom'

export default function MiddleGraph({ bills, currentUsername }) {
    const allExpenses = Math.abs(bills.filter(data => data.type === "expense").reduce(((acc, curr) => acc + Number(curr.amount)), 0))
    const allIncomes = bills.filter(data => data.type === "income").reduce(((acc, curr) => acc + Number(curr.amount)), 0);

    return (
        <div>
            <div className={styles.recordsCenterGraphLinearContainer}>
                <Card>
                    <div className={styles.middleGraphContainer}>
                        <div className={styles.middleGraphContainerTopPart}>
                            <h2>Wallet Application</h2>
                        </div>

                        <div className={styles.middleGraphContainerCenterPart}>
                            <h2>Current balance: {Number(allIncomes - allExpenses)}$</h2>
                        </div>

                        <div className={styles.middleGraphContainerBottomPart}>
                            <h2>Username: {currentUsername}</h2>
                        </div>
                    </div>

                </Card>
            </div>
        </div>
    )
}
