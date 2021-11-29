import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import AuthContext from '../../context/auth/Auth.context';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const {isAuthenticated, logout, user} = authContext;

  const onLogout = () => {
    logout();
  };

  const authenticatedLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a href={"#!"} onClick={onLogout}>
          <i className={"fas fa-sign-out-alt"}></i>
          <span className={"hide-sm"}>Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/about"}>Register</Link>
      </li>
      <li>
        <Link to={"/about"}>Login</Link>
      </li>
    </>
  );

  return (
    <div className={"navbar bg-primary"}>
      <h1>
        <i className={icon}/>{' '}
        File-O-Fax
      </h1>
      <ul>
        {isAuthenticated ? authenticatedLinks : guestLinks}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Title Place-holder',
  icon: 'fas fa-exclamation-triangle'
};

export default Navbar;