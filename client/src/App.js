
import React, { useState, useEffect } from 'react';
import ViewAllPage from './pages/ViewAllPage'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LookingForInkPage from './pages/LookingForInkPage';
import AvailableInkPage from './pages/AvailableInkPage';
import UserHomePage from './pages/UserHomePage';
import UserProfilePage from './pages/UserProfilePage';

import './App.css';
import API from './utils/API';


function App() {
  let [authState, setAuthState] = useState({
    authorized: false,
  });

  useEffect(() => {
    console.log("use effect log: " + authState.authorized)
    isAuthorized()
  }, [])


  const isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        console.log(res.data.message)
        setAuthState({
          authorized: res.data.message ? false : true
        })
        console.log("is auth log: " + authState.authorized)
      })
      .catch(err => {
        console.log(err);
        setAuthState({ authorized: false });
      });
  };

  const logout = e => {
    e.preventDefault();


    API.logout()
      .then(res => {
        console.log(res.data.message)
        isAuthorized()
      })
      .catch(err => console.log(err));
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SignupPage />
          </Route>
          <Route exact path="/login">
            {authState.authorized ? <Redirect to="/home"/> : <LoginPage isAuthorized={isAuthorized} authorized={authState.authorized} />}
          </Route>
          <Route exact path="/home">
                {authState.authorized ? (
                  <ViewAllPage 
                    logout={logout} 
                    authState={authState}
                  />
                ) : (
                    <Redirect to="/login" />
                  )}
          </Route>
          <Route exact path="/available">
                {authState.authorized ? (
                  <AvailableInkPage 
                    logout={logout} 
                    authState={authState}
                  />
                ) : (
                    <Redirect to="/login" />
                  )}
          </Route>
          <Route exact path="/looking">
                {authState.authorized ? (
                  <LookingForInkPage 
                    logout={logout} 
                    authState={authState}
                  />
                ) : (
                    <Redirect to="/login" />
                  )}
          </Route>
          <Route exact path="/userhome">
                {authState.authorized ? (
                  <UserHomePage 
                    logout={logout} 
                    authState={authState}
                  />
                ) : (
                    <Redirect to="/login" />
                  )}
          </Route>
          <Route exact path="/profile">
                {authState.authorized ? (
                  <UserProfilePage 
                    logout={logout} 
                    authState={authState}
                  />
                ) : (
                    <Redirect to="/login" />
                  )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
