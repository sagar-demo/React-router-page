import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
        </li>
        <li>
        <NavLink to="/service" className="nav-link" activeClassName="active">Service</NavLink>
      </li>
      <li>
      <NavLink to="/signup" className="nav-link" activeClassName="active">
        <FontAwesomeIcon icon={faUser} />
        SignUp
      </NavLink>
    </li>
      </ul>
    </nav>
  );
};

export default Navbar;
