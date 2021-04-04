import React, { useEffect, useState } from "react";

import './index.css'
import { BrowserRouter, Route, Switch, Spin } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons'
import Navbar from './Navbar/Navbar'
import LoginPage from './Login/LoginPage'
import RegisterPage from './Register/RegisterPage'
import HomePage from './Home/HomePage'
import Records from './Records/Records';
import AddRecord from './AddRecord/AddRecord';
import Analytics from './Analytics/Analytics';
import AddStartIncome from './AddStartIncome/AddStartIncome';
import firebase from "./firebase";
import { database } from './firebase'

import 'antd/dist/antd.css';

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        console.log("No user: ", user);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><LoadingOutlined style={{ fontSize: 400 }} spin /></div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} />

        <Switch>
          <Route exact path="/">
            {user ? <HomePage user={user} /> : <LoginPage />}
          </Route>

          <Route path="/records">
            {user ? <Records user={user} /> : <LoginPage />}
          </Route>

          <Route path="/analytics">
            {user ? <Analytics user={user} /> : <LoginPage />}
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
            <AddStartIncome />
          </Route>

          <Route path="*">
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
