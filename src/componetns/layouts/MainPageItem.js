/* eslint-disable arrow-body-style */
/* eslint-disable dot-notation */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import * as images from '../imgs/index';

const MainPageItem = ({ country }) => {
  const countryNameTrimmed = country.name.replace(/[\s+)(]/g, '');

  return (
    <div className="main-page-item">
      <div className="card">
        <img src={images[countryNameTrimmed]} alt={country.name} className="image" />
        <i className="material-icons forward-arrow">arrow_forward</i>
        <div className="card-body">
          <h5>{country.name}</h5>
          <p>{country.population}</p>
        </div>
      </div>
    </div>
  );
};

MainPageItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default MainPageItem;
