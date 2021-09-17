/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainPageHeader from '../layouts/MainPageHeader';
import MainPageItem from '../layouts/MainPageItem';
import { getCountries } from '../../store/actions/countriesAction';

const Countires = ({ data: { countries, loading }, getCountries }) => {
  useEffect(() => {
    getCountries();
  }, []);

  if (loading || loading === null) return <h4>Loading...</h4>;
  return (
    <>
      <MainPageHeader countries={countries} />
      <div>
        <p className="list-header p">Countries in Alphabeth order</p>
        <div className="section">
          {!loading && countries.length === 0 ? (<p>Loading...</p>) : (
            countries.map((country) => (
              <MainPageItem
                name={country.name}
                population={country.population}
                code={country.alpha2Code}
                key={country.alpha2Code}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

Countires.propTypes = {
  data: PropTypes.object.isRequired,
  getCountries: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.countries,
});

export default connect(mapStateToProps, { getCountries })(Countires);
