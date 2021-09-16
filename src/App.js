import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Navbar from './componetns/layouts/Navbar';
import CountryInfo from './componetns/pages/CountryInfo';
import Countries from './componetns/pages/Countries';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={Countries}
        />
        <Route exact path="/country" component={CountryInfo} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
