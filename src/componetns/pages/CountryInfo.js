/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getCurrent } from '../../store/actions/countriesAction';
import * as images from '../imgs/index';

const Country = ({
  current, getCurrent, loading, match,
}) => {
  const { code } = match.params;

  useEffect(() => {
    getCurrent(code);
  }, []);

  if (loading || current === null) return <h4 className="my-3">No data here...</h4>;

  return (
    <div className="list-card">
      <div className="card-header">
        <div>
          <img src={images[current.name.replace(/[\s+)(]/g, '')]} alt={current.name} />
        </div>
        <div>
          <h2>
            {current.name}
          </h2>
        </div>
      </div>
      {!loading && current === 0 ? (<h4 className="my-3">Loading...</h4>) : (
        <>
          <div className="list-item">
            <p>Native name:</p>
            <div>{current.nativeName}</div>
          </div>
          <div className="list-item">
            <p>Capital city:</p>
            <div>{current.capital}</div>
          </div>
          <div className="list-item">
            <p>Area sqm:</p>
            <div>{current.area}</div>
          </div>
          <div className="list-item">
            <p>Population:</p>
            <div>{current.population}</div>
          </div>
          <div className="list-item">
            <p>Demonym:</p>
            <div>{current.demonym}</div>
          </div>
          <div className="list-item">
            <p>Region:</p>
            <div>{current.region}</div>
          </div>
          <div className="list-item">
            <p>Top level domain:</p>
            <div>{current.topLevelDomain[0]}</div>
          </div>
        </>
      )}
    </div>
  );
};

Country.propTypes = {};

const mapStateToProps = (state) => ({
  current: state.countries.current,
  loading: state.countries.loading,
});

export default connect(mapStateToProps, { getCurrent })(Country);
