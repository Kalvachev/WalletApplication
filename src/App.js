import React, { useEffect, useState } from "react";

import './index.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
  const [something, setSomething] = useState([]);
  const [allBills, setAllBills] = useState([]);

  const currentUser = firebase.auth().currentUser;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        console.log("No user: ", user);
      }
    });
  }, []);

  useEffect(() => {
    database.collection("users").get()
      .then((users) => {
        let usersDb = [];
        users.forEach((user) => {
          usersDb.push(user.data());
        });
        setSomething(usersDb);
      });

  }, []);

  useEffect(() => {
    const userUID = '';

    if (currentUser) {
      userUID = firebase.auth().currentUser.uid;
    }

    // GET ALL BILLS
    database
      .collection("bills")
      .where('createdBy', '==', userUID)
      .get()
      .then(snpashot => {
        let allBills = [];

        snpashot.forEach(bill => {
          allBills.push(bill.data());
        })
        setAllBills(allBills);
      })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/">
            {currentUser ? <HomePage allBills={allBills} setAllBills={setAllBills} /> : <LoginPage />}
            {/* <HomePage /> */}
          </Route>

          <Route path="/records">
            {currentUser ? <Records allBills={allBills} setAllBills={setAllBills} /> : <LoginPage />}
            {/* <Records /> */}
          </Route>

          <Route path="/analytics">
            {currentUser ? <Analytics allBills={allBills} setAllBills={setAllBills} /> : <LoginPage />}
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
