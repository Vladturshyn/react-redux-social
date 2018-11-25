import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import {setCurrentUser, logoutUser} from '../../actions/authActions';
import {clearCurrentProfile} from '../../actions/profileActions';
import store from '../../store';
import { Provider } from 'react-redux';

import PrivateRoute from '../../components/Common/PrivateRoute';
import CreateProfile from '../../components/CreateProfile';
import EditProfile from '../../components/EditProfile';
import AddExperience from '../../components/AddExperience';
import AddEducation from '../../components/AddEducation';
import AllProfiles from '../../components/AllProfiles';
import Profile from '../../components/Profile/Profile';
import NotFound from '../../components/NotFound';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Landing from '../../components/Landing';
import Login from '../../components/Auth/Login';
import Reginster from '../../components/Auth/Register';
import Dashboard from '../../components/Dashboard';


// check for token
if(localStorage.jwtToken){
  // set auth token
  setAuthToken(localStorage.jwtToken);
  // decode user and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  //set current user and isAuth
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
    // user logout
    store.dispatch(logoutUser());
    // clear current profile
    store.dispatch(clearCurrentProfile());
    // redirect to login
    window.location.href = '/login';
  }
}


export default class MainPage extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={ Landing } />
            <div className="container">
              <Route exact path="/login" component={ Login } />
              <Route exact path="/register" component={ Reginster } />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={ Dashboard } />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/create-profile" component={ CreateProfile } />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/edit-profile" component={ EditProfile } />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-experience" component={ AddExperience } />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-education" component={ AddEducation } />
              </Switch>
              <Route exact path="/profiles" component={ AllProfiles } />
              <Route exact path="/profile/:handle" component={ Profile } />
              <Route exact path="/not-found" component={ NotFound } />
            </div>
            <Footer />
          </div>
      </Router>
     </Provider>
    )
  }
}
