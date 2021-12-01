import React, { useState, useEffect } from 'react';
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";

const AppLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const
      res = await fetch('/logs'),
      data = await res.json(); // When using FETCH you must use this to return a json formatted response (unlike axios)

    console.log('Data is: ', data);
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
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
        logs.map(log => <LogItem log={log} key={log._id} />)
      )}
    </ul>
  );
};

export default AppLogs;