/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  return (
    <nav>
      <div className="navbar">
        <Link
          to="/"
          className="brand-logo left"
        >
          {history.location.pathname !== '/' ? (
            <div>
              <i className="material-icons">chevron_left</i>
            </div>
          ) : (
            <div>
              European Countries
            </div>
          )}
        </Link>
        <ul className="right">
          <li><i className="material-icons mx-1">mic</i></li>
          <li><i className="material-icons">settings</i></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
