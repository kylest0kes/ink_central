import React from 'react';
//import ViewAllPage from './pages/ViewAllPage'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignupPage from './pages/SignupPage';
// import LoginPage from './pages/LoginPage';
// import LookingForInkPage from './pages/LookingForInkPage';
//import AvailableInkPage from './pages/AvailableInkPage';
import UserHomePage from './pages/UserHomePage';

import './App.css';


function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route exact path="/">
    //         <SignupPage />
    //       </Route>
    //       <Route path="/login">
    //         <LoginPage />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    //<ViewAllPage />
    //<AvailableInkPage />
    //<LookingForInkPage />
    <UserHomePage />
  );
}

export default App;
