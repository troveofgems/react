import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import AuthContext from '../../context/auth/Auth.context';
import ContactContext from '../../context/contact/Contact.context';

const Navbar = ({ title, icon }) => {
  const
    authContext = useContext(AuthContext),
    contactContext = useContext(ContactContext);

  const {isAuthenticated, logout, user} = authContext;
  const {clearContacts} = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authenticatedLinks = (
    <>
      <li style={{marginRight: '10px'}}>
        Hello {user && (user.firstName)}
      </li>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
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
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
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
        <li>
          <Link to={"/about"}>About</Link>
        </li>
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