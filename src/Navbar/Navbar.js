import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import LoginPage from '../Login/LoginPage'
import RegisterPage from '../Register/RegisterPage'
const { Header, Content, Footer } = Layout;

export default function Navbar() {
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <Layout>
                        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                            <div className="logo" />
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/records">Records</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/analytics">Analytics</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/login">Login</Link></Menu.Item>
                                <Menu.Item key="5"><Link to="/register">Register</Link></Menu.Item>
                            </Menu>
                        </Header>
                    </Layout>

                    <Switch>
                        <Route exact path="/">

                        </Route>

                        <Route path="/records">
                        </Route>

                        <Route path="/analytics">
                        </Route>

                        <Route path="/login">
                            <LoginPage />
                        </Route>

                        <Route path="/register">
                            <RegisterPage />
                        </Route>

                        <Route path="*">
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    )
}

