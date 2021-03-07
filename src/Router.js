import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import App from './App';
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import { store } from './store/store'
import firebase from 'firebase'


const Router = () => {
    let isEmpty = null;
    console.log(firebase);
   firebase.auth().onAuthStateChanged((user) => {
       if (user) {
           // User is signed in
           isEmpty = true
       }else {
           // User isn't signed in
           isEmpty = false
        }
   })
    return(
        <BrowserRouter>
           


            <PrivateRoute exact path="/" component={App} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
        </BrowserRouter>
    )
}

export default Router;