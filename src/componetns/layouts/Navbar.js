/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="navbar">
      <Link
        to={`${process.env.PUBLIC_URL}/`}
        className="brand-logo left"
      >
        <div className="logo">
          <i className="material-icons">chevron_left</i>
          <h5>European Countries</h5>
        </div>
      </Link>
      <ul className="right">
        <li><i className="material-icons mx-1">mic</i></li>
        <li><i className="material-icons">settings</i></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
