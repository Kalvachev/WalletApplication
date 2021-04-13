import React from 'react';
import styles from './error.module.scss';
import { Button } from 'antd';
import { useHistory } from 'react-router';

export default function ErrorPage() {
    const history = useHistory();

    const onHomePage = () => {
        history.push('/')
    }
    return (
        <div>
            <div className={styles.errorPageContainer}>
                <div className={styles.mainContainer}>
                    <div className={styles.secondaryContainer}>
                        <h1>Error 404</h1>
                    </div>

                    <div className={styles.goToHomeBtn}>
                        <Button type="primary" style={{ backgroundColor: 'black', borderColor: 'grey'}} onClick={() => onHomePage()}>
                            Return to HOME
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
