import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min';

import { deleteTechnician } from "../../redux/actions/technician.actions";

const TechItem = ({ technician, deleteTechnician }) => {
  const onDelete = () => {
    deleteTechnician(technician.id);
    M.toast({html:  `Technician was deleted`});
  };
  return (
    <li className={"collection-item"} key={technician._id}>
      <div>
        {technician.firstName} {technician.lastName}
        <a href={"#!"} className={"secondary-content"} onClick={onDelete}>
          <i className={"material-icons grey-text"}>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  deleteTechnician: PropTypes.func.isRequired,
  technician: PropTypes.object.isRequired,
};

export default connect(null, {deleteTechnician})(TechItem);