import React from 'react'
import { Button } from 'antd';
import { BiLogOut } from 'react-icons/bi'
import styles from './logout.module.scss'
import firebase from '../firebase';
import { useHistory } from 'react-router';

export default function Logout() {
    let history = useHistory();

    const onLogout = () => {
        firebase.auth().signOut().then(() => {
            history.replace('/login')
        }).catch((error) => {
            console.log(error.message);
        });
    }

    return (
        <div className={styles.logoutButtonContainer}>
            <Button type="primary" style={{ backgroundColor: 'black', borderColor: 'grey' }} onClick={() => onLogout()}>
                <BiLogOut size='1.5em' />
            </Button>
        </div>
    )
}
