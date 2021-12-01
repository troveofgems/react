import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import PropTypes from 'prop-types';

import { getLogsFromServerViaRedux } from "../../redux/actions/log.actions";

const AppLogs = ({ log: {logs, loading}, getLogsFromServerViaRedux }) => {
  useEffect(() => {
    getLogsFromServerViaRedux();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className={"collection with-header"}>
      <li className={"collection-header"}>
        <h4 className={"center"}>System Logs</h4>
      </li>
      {!loading && (logs.length === 0) ? (
        <p className={"center"}>No Logs To Show</p>
      )
      :
      (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

AppLogs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogsFromServerViaRedux: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogsFromServerViaRedux })(AppLogs);