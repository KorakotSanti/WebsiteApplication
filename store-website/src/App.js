import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar/navbar';
import Homepage from './components/Homepage/homepage';
import { Redirect, Route, Switch } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/home" component={Homepage}/>
        <Redirect from="/" to="/home"/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
