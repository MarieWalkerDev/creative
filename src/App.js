import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const PopPage = () => (
  <div>
    <h1>Funko Pop Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/poppage' component={PopPage} />
      </Switch>
    </div>
  );
}

export default App;
