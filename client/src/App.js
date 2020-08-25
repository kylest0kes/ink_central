import React from 'react';

//import ViewAllPage from './pages/ViewAllPage' //minor style fix needed
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignupPage from './pages/SignupPage'; //style fix needed
// import LoginPage from './pages/LoginPage';
import LookingForInkPage from './pages/LookingForInkPage';
//import AvailableInkPage from './pages/AvailableInkPage'; //style fix needed
//import UserHomePage from './pages/UserHomePage'; //style fix needed
//import UserProfilePage from './pages/UserProfilePage';


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
    <LookingForInkPage />
    //<UserHomePage />
    //<UserProfilePage />

  );
}

export default App;
