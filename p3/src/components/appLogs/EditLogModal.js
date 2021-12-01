import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min';

import TechSelectOptions from "../technicians/TechSelectOptions";
import { updateLog } from "../../redux/actions/log.actions";

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and technician' });
    } else {

      const proposedUpdates = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };

      updateLog(proposedUpdates);
      M.toast({ html: `Log ID #-${current.id} has been updated by ${tech}.` });

      setMessage('');
      setAttention(false);
      setTech('');
    }
  };

  return (
    <div id={"edit-log-modal"} className={"modal"} style={modalStyle}>
      <div className={"modal-content"}>
        <h4>Enter System Log</h4>
        <div className={"row"}>
          <div className={"input-field"}>
            <input type={"text"} name={"message"} value={message} onChange={evt => setMessage(evt.target.value)}/>
          </div>
        </div>
        <div className={"row"}>
          <div className={"input-field"}>
            <select
              name={"tech"} value={tech} className={"browser-default"}
              onChange={evt => setTech(evt.target.value)}
            >
              <option value={""} disabled>Select A Technician</option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className={"row"}>
          <div className={"input-field"}>
            <p>
              <label>
                <input type={"checkbox"} className={"filled-in"} checked={attention} value={attention}
                       onChange={() => setAttention(!attention)}
                />
                <span>Needs Triage</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className={"modal-footer"}>
        <a href={"#!"} onClick={onSubmit} className={"modal-close waves-effect green waves-blue btn"}>
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  height: '75%',
  width: '75%'
};

EditLogModal.propTypes ={
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);