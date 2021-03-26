import React from 'react'
import AnalyticsFilters from './AnalyticsFilters'
import AnalyticsList from './AnalyticsList'
import styles from './analytics.module.scss'

export default function Analytics() {

    return (
        <>
            <div className={styles.analyticsPageContainer}>
                <AnalyticsFilters />
                <AnalyticsList />
            </div>
        </>
    )
}