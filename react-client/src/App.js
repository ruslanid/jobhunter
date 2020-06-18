import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import JobsPage from './pages/jobs/jobs.page';
import HomePage from './pages/home/home.page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/jobs" component={JobsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
