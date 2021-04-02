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
  const [users, setUsers] = useState([]);

  const currentUser = firebase.auth().currentUser;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        console.log("No user: ", user);
      }
    });
  }, []);

  // useEffect(() => {
  //   database.collection("users").get()
  //     .then((users) => {
  //       let usersDb = [];
  //       users.forEach((user) => {
  //         usersDb.push(user.data());
  //       });
  //       setUsers(usersDb);
  //     });

  // }, []);
  if (isLoading) {
    return <div><LoadingOutlined style={{ fontSize: 80 }} spin /></div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} />

        <Switch>
          <Route exact path="/">
            {currentUser ? <HomePage /> : <LoginPage />}
            {/* <HomePage /> */}
          </Route>

          <Route path="/records">
            {currentUser ? <Records /> : <LoginPage />}
            {/* <Records /> */}
          </Route>

          <Route path="/analytics">
            {currentUser ? <Analytics /> : <LoginPage />}
            {/* <Analytics /> */}
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
