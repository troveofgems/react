import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import PropTypes from 'prop-types';
import {deleteLog ,setCurrent} from "../../redux/actions/log.actions";

import M from 'materialize-css/dist/js/materialize.min';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { id: _id } = log;

  const onDelete = () => {
    deleteLog(_id);
    M.toast({ html: `Log ID #-${_id} has been deleted` });
  }

  return (
    <li className={"collection-item"} key={_id}>
      <div>
        <a href={"#edit-log-modal"} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <div className={"grey-text"}>
          <div>
            <span className={"black-text"}>ID #-{_id}</span>{' '}last updated by{' '}
            <span className={"black-text"}>{log.tech}</span> on <Moment parse="YYYY-MM-DD HH:mm">{log.date}</Moment>

          </div>
          <div className={"black-text"}>
            Assigned Technician: {log.tech}
          </div>
          <a href="#!" onClick={onDelete} className={"secondary-content"}>
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  log: PropTypes.object.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);