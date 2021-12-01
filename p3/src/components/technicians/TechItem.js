import React from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ technician }) => {
  return (
    <li className={"collection-item"} key={technician._id}>
      <div>
        {technician.firstName} {technician.lastName}
        <a href={"#!"} className={"secondary-content"}>
          <i className={"material-icons grey-text"}>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  technician: PropTypes.object.isRequired,
};

export default TechItem;