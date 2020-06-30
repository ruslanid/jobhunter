import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';

import Header from './components/header/header.component';

import JobsPage from './pages/jobs/jobs.page';
import ProfilePage from './pages/profile/profile.page';
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';

import {selectCurrentUser} from './redux/users/users.selectors';
import {setCurrentUserFromLocalStorage} from './redux/users/users.actions';

function App({dispatch, currentUser}) {

  useEffect(() => {
    dispatch(setCurrentUserFromLocalStorage());
  }, []);

  return (
    <div className="App">
      { currentUser ? (<Header />) : null}
      <Switch>
        <Route
          exact
          path="/profile"
          render={() => currentUser ? (<ProfilePage />) : (<Redirect to="/sign-in" />)}
        />
        <Route
          exact
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
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
