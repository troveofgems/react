import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/private.route";

import ContactState from "./context/contact/Contact.state";
import AuthState from "./context/auth/Auth.state";
import AlertState from "./context/alert/Alert.state";

import setConfigHeaders from "./utils/setConfigHeaders";

import './App.css';

if (localStorage.autoken) {
  setConfigHeaders(localStorage.autoken);
}

const App = () => {
  return (
    <AuthState>
    <ContactState>
      <AlertState>
      <Router>
        <>
          <Navbar/>
          <div className="container">
            <Alerts />
            <Routes>
              <PrivateRoute path={"/"} element={<Home/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/register"} element={<Register/>}/>
              <Route path={"/login"} element={<Login/>}/>
            </Routes>
          </div>
        </>
      </Router>
      </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
