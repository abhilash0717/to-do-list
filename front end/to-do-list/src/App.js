import './App.css';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './components/HomePage'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import Logout from './components/Logout'

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
      <Link to =  "/"></Link>
      <Link to =  "/login"></Link>
      <Link to = "/loggedin" />
      <Link  to = "/logout"/>

        <Switch>
        <Route exact path = "/" component = {HomePage}></Route>
        <Route path = "/login" component = {Login}></Route>
        <Route path = "/loggedin" component = {Loggedin}></Route>
        <Route path = "/logout" component = {Logout}></Route>
        </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
