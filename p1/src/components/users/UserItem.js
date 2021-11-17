// Stateless Functional Component - Receiving Props From Parent Component
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const UserItem = props => {
  const {login, avatar_url, html_url} = props.user;
  return (
    <div style={cardContainer}>
      <img src={avatar_url} alt={`UserLogo-${login}`} style={imgRestraints}/>
      <h3>{login}</h3>
      <div>
        {html_url.length === 0 ? (
          <h3>
            No GitHub Repo Available
          </h3>
        ) : (
          <Link to={`/user/${login}`}>
            View Profile
          </Link>
        )}
      </div>
    </div>
  );
}

const
  cardContainer = {
    border: '1px dashed gray',
    boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
    margin: '0 auto',
    padding: '10px',
    textAlign: 'center',
    width: '50%'
  },
  imgRestraints = {
    height: '5rem',
    width: '5rem'
  };

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;