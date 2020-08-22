import React from 'react';
//import ViewAllPage from './pages/ViewAllPage'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignupPage from './pages/SignupPage';
// import LoginPage from './pages/LoginPage';
import LookingForInk from './pages/LookingForInk';
import AvailableInkPage from './pages/AvailableInkPage'

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
    <AvailableInkPage />

  );
}

export default App;
