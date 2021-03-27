import React from 'react';
import './index.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './Navbar/Navbar'
import LoginPage from './Login/LoginPage'
import RegisterPage from './Register/RegisterPage'
import HomePage from './Home/HomePage'
import Records from './Records/Records';
import AddRecord from './AddRecord/AddRecord';
import Analytics from './Analytics/Analytics';

import 'antd/dist/antd.css';

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <AddRecord />
              <HomePage />
            </Route>

            <Route path="/records">
              <Records />
            </Route>

            <Route path="/analytics">
              <Analytics />
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
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
