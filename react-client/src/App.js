import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';

import JobsPage from './pages/jobs/jobs.page';
import ProfilePage from './pages/profile/profile.page';
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';

function App() {
  
  const [userDetails, setUserDetails] = useState({
    currentUser: null
  });

  const {currentUser} = userDetails;

  return (
    <div className="App">
      { currentUser ? (<Header />) : null}
      <Switch>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/jobs" component={JobsPage} />
        <Route
          path="/sign-in"
          render={() => currentUser ? (<Redirect to="/jobs" />) : (<SignInPage />)}
        />
        <Route
          path="/sign-up"
          render={() => currentUser ? (<Redirect to="/jobs" />) : (<SignUpPage />)}
        />
        <Route
          path="/"
          render={() => currentUser ? (<Redirect to="/jobs" />) : (<Redirect to="/sign-in" />)}
        />
      </Switch>
    </div>
  );
}

export default App;
