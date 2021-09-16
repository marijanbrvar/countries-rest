/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import europeMap from '../imgs/europe_map.png';

const MainPageHeader = (props) => {
  const { countires } = props;

  const total = countires.length;
  const population = countires.reduce((sum, country) => sum + country.population, 0);

  return (
    <>
      <div className="main-card">
        <div className="main-card-image">
          <img src={europeMap} alt="Europe map" width={50} />
        </div>
        <div className="main-card-info">
          <h4>Europe</h4>
          <span className="label">Total countries:</span>
          <h6 className="value">
            {total}
          </h6>
          <span className="label">Population: </span>
          <h6 className="value">
            {population.toLocaleString()}
          </h6>
        </div>
      </div>
    </>
  );
};

MainPageHeader.propTypes = {
  countires: PropTypes.array.isRequired,
};

export default MainPageHeader;
