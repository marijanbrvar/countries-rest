import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './componetns/layouts/Navbar';
import MainPageHeader from './componetns/layouts/MainPageHeader';
import MainPageItem from './componetns/layouts/MainPageItem';
import CountryInfo from './componetns/pages/CountryInfo';

const App = () => {
  const [countires, setCountires] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountires = async () => {
    setLoading(true);
    const res = await fetch('https://restcountries.com/v2/continent/europe');
    const data = await res.json();
    setCountires(data);
    setLoading(false);
  };

  useEffect(() => {
    getCountires();
  }, []);

  if (loading) return <h4>Loading...</h4>;

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <MainPageHeader countires={countires} />
              <p className="list-header p">Countries in Alphabeth order</p>
              <div className="section">
                {!loading && countires.length === 0 ? (<p>No countries to show</p>) : (
                  countires.map((country) => (
                    <MainPageItem country={country} key={country.alpha2Code} />
                  ))
                )}
              </div>
            </>
          )}
        />
        <Route exact path="/country" component={CountryInfo} />
      </Switch>
    </Router>
  );
};

export default App;
