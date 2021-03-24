import React from 'react';
import './index.css'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import LoginPage from './Login/LoginPage'
import RegisterPage from './Register/RegisterPage'
import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
      </div>
    </>
  );
}

export default App;
