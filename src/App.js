/* eslint-disable react/jsx-key */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import Navbar from './componetns/layouts/Navbar';

const App = () => {
  const [countires, setCountires] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCountires();
  }, []);

  const getCountires = async () => {
    setLoading(true);
    const res = await fetch('https://restcountries.com/v2/continent/europe');
    const data = await res.json();
    setCountires(data);
    setLoading(false);
  };

  if (loading) return <h4>Loading...</h4>;

  return (
    <div>
      <Navbar />
      <h1>Main page</h1>
      {!loading && countires.length === 0 ? (<p>No countries to show</p>) : (
        countires.map((country) => (
          <li key={country.alpha2Code}>
            {country.name}
            {' '}
            /
            {country.population}
            {country.nativeName}
          </li>
        ))
      )}
    </div>
  );
};

export default App;
