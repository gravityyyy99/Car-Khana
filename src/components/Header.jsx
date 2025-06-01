import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About Us
        </NavLink>
        <NavLink to="/cars" activeClassName="active">
          Cars
        </NavLink>
        <NavLink to="/merch" activeClassName="active">
          Merch
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;