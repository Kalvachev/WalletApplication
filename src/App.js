import React from 'react';
import NavBar from './NavBar';
import './styles.css'
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <div className="App">

          <nav className="header">
            <Link to="/">Home</Link>
            <Link to="/records">Records</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/login">Login</Link>
          </nav>

          <Switch>
            <Route exact path="/">
            </Route>

            <Route path="/records">
            </Route>

            <Route path="/analytics">
            </Route>

            {/* <Route path="/matches/:matchId">
            </Route> */}

            <Route path="/login">
            </Route>

            <Route path="*">
            </Route>
          </Switch>

          <footer>This is my footer</footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;