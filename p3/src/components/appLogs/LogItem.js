import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {

  return (
    <li className={"collection-item"}>
      <div>
        <a href={"#edit-log-modal"} className={`modal-trigger ${log.triage ? 'red-text' : 'blue-text'}`}>
          {log.message}
        </a>
        <div className={"grey-text"}>
          <div>
            <span className={"black-text"}>ID #{log._id}</span>{' '}last updated by{' '}
            <span className={"black-text"}>{log.tech}</span> on

          </div>
          <div className={"black-text"}>
            Assigned Technician: {log.tech}
          </div>
          <a href="#!" className={"secondary-content"}>
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default LogItem;