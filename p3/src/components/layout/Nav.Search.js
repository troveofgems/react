import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from "../../redux/actions/log.actions";

const NavSearch = ({ searchLogs }) => {
  const queryStr = useRef('');
  const onChange = evt => {
    searchLogs(queryStr.current.value);
  };
  return (
    <nav style={{ marginBottom: '30px' }}>
      <div className={"nav-wrapper"}>
        <form>
          <div className={"input-field"}>
            <input id={"search"} type={"search"} placeholder={"Search Logs..."}
                   ref={queryStr} onChange={onChange}
            />
            <label className={"label-icon"} htmlFor={"search"}>
              <i className={"material-icons"}>search</i>
            </label>
            <i className={"material-icons"}>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

NavSearch.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(NavSearch);