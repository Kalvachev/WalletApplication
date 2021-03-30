import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import AddRecord from '../AddRecord/AddRecord'
import styles from './navbar.module.scss'
const { Header } = Layout;

export default function Navbar() {
    return (
        <>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className={styles.navigationContainer}>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/records">Records</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/analytics">Analytics</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/login">Login</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/register">Register</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/login">Logout</Link></Menu.Item>
                    </Menu>
                    <AddRecord />
                </Header>
            </Layout>
        </>
    )
}

