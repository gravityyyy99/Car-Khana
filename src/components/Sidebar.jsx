import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
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
    </div>
  );
};

export default Sidebar;