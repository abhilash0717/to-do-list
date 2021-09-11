// import './App.css';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './components/HomePage'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
      <Link to =  "/"></Link>
      <Link to =  "/login"></Link>
        <Switch>
        <Route exact path = "/" component = {HomePage}></Route>
        <Route path = "/login" component = {Login}></Route>
        </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
