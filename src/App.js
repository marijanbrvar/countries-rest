import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Navbar from './componetns/layouts/Navbar';
import CountryInfo from './componetns/pages/CountryInfo';
import Countries from './componetns/pages/Countries';

const App = () => (
  <Router>
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={Countries}
        />
        <Route path="/:code" component={CountryInfo} />
      </Switch>
    </Provider>
  </Router>
);

export default App;
