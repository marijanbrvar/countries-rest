/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as images from '../imgs/index';

const MainPageItem = (props) => {
  const { name, population, code } = props;
  const countryNameTrimmed = name.replace(/[\s+)(]/g, '');

  return (
    <Link to={code} className="main-page-item">
      <div>
        <div className="card">
          <img src={images[countryNameTrimmed]} alt={name} className="image" />
          <i className="material-icons forward-arrow">arrow_forward</i>
          <div className="card-body">
            <h5>{name}</h5>
            <p>{population}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

MainPageItem.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
};

export default MainPageItem;
