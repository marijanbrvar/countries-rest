import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './componetns/layouts/Navbar';
import CountryInfo from './componetns/pages/CountryInfo';
import Countries from './componetns/pages/Countries';

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route
        exact
        path="/"
        component={Countries}
      />
      <Route exact path="/:code" component={CountryInfo} />
    </Switch>
  </div>
);

export default App;
