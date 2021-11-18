import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// App Component Imports
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from './components/pages/About';
import GithubState from './context/github/github.state';
import NotFound from "./components/pages/NotFound";

import './App.css';
import AlertState from "./context/alert/alert.state";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar/>
            <div className='pageContainer'>
              <Alert />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/user/:login" component={User}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
