import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from "./TechItem";
import { getTechniciansList } from "../../redux/actions/technician.actions";

const TechListModal = ({ getTechniciansList, technician: { techList, loading } }) => {
  useEffect(() => {
    getTechniciansList();
    // eslint-disable-next-line
  }, []);

  return (
    <div id={"tech-list-modal"} className={"modal"}>
      <div className={"modal-content"}>
        <h4>Technician List</h4>
        <ul className={"collection"}>
          {!loading && techList !== null && techList.map(technician => (
            <TechItem technician={technician} key={technician.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechniciansList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  technician: state.technician
});

export default connect(mapStateToProps, { getTechniciansList })(TechListModal);