import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTechniciansList } from "../../redux/actions/technician.actions";

const TechSelectOptions = ({getTechniciansList, technician: {techList, loading}}) => {
  useEffect(() => {
    getTechniciansList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!loading && techList !== null && techList.map(tech => (
        <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>{tech.firstName} {tech.lastName}</option>
      ))}
    </>
  );
};

TechSelectOptions.propTypes = {
  getTechniciansList: PropTypes.func.isRequired,
  technician: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  technician: state.technician
});

export default connect(mapStateToProps, {getTechniciansList})(TechSelectOptions);