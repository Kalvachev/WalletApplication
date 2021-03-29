import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


const { Header } = Layout;

export default function Navbar() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    function logoutHandler() {
        setError("")

        try {
            logout()
            history.push("/login")
            console.log('success');
        } catch {
            setError("Failed to log out")
        }
    }
    return (
        <>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/records">Records</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/analytics">Analytics</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/login">Login</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/register">Register</Link></Menu.Item>
                        <Menu.Item key="6" onClick={logoutHandler}>Logout</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        </>
    )
}

