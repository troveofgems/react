import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min';

import TechSelectOptions from "../technicians/TechSelectOptions";
import { addLog } from "../../redux/actions/log.actions";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and technician' })
    } else {
      const newLog = {
        message, attention, tech, date: new Date()
      };

      addLog(newLog);

      M.toast({ html: `Log added by ${tech}` });
    }
  };

  return (
    <div id={"add-log-modal"} className={"modal"} style={modalStyle}>
      <div className={"modal-content"}>
        <h4>Enter System Log</h4>
        <div className={"row"}>
          <div className={"input-field"}>
            <input type={"text"} name={"message"} value={message} onChange={evt => setMessage(evt.target.value)}/>
            <label htmlFor={"message"} className={"active"}>
              Log Message
            </label>
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
}

export default connect(null, { addLog })(AddLogModal);