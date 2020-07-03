import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import setJwtInHeader from './redux/users/authUtils';

import './App.css';

import Header from './components/header/header.component';

import JobsPage from './pages/jobs/jobs.page';
import ProfilePage from './pages/profile/profile.page';
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';

import {selectCurrentUser} from './redux/users/users.selectors';
import {verifyCurrentUser} from './redux/users/users.actions';
import Footer from './components/footer/footer.component';

function App({dispatch, currentUser}) {

  useEffect(() => {
    dispatch(verifyCurrentUser());
  }, []);

  const token = localStorage.token;

  if (token) {
    setJwtInHeader(token);
  }
  
  return (
    <div className="App">
      <div className="page-content">
        { currentUser ? (<Header />) : null}
        <Switch>
          <Route
            exact
            path="/profile"
            render={() => currentUser ? (<ProfilePage />) : (<Redirect to="/sign-in" />)}
          />
          <Route
            path="/jobs"
            render={() => currentUser ? (<JobsPage />) : (<Redirect to="/sign-in" />)}
          />
          <Route
            exact
            path="/sign-in"
            render={() => currentUser ? (<Redirect to="/jobs" />) : (<SignInPage />)}
          />
          <Route
            exact
            path="/sign-up"
            render={() => currentUser ? (<Redirect to="/jobs" />) : (<SignUpPage />)}
          />
          <Route
            exact
            path="/"
            render={() => currentUser ? (<Redirect to="/jobs" />) : (<Redirect to="/sign-in" />)}
          />
        </Switch>
      </div>
      

      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
