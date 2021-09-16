/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => (
  <nav>
    <div className="navbar">
      <a href="#!" className="brand-logo left">
        {/* <i className="material-icons">cloud</i> */}
        <h5>European Countries</h5>
      </a>
      <ul className="right">
        <li><i className="material-icons mx-1">mic</i></li>
        <li><i className="material-icons">settings</i></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
