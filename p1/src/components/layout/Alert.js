import React, { useContext } from 'react';
import AlertContext from "../../context/alert/alert.context";

const Alert = () => {
  const
    alertContext = useContext(AlertContext),
    { alert } = alertContext;

  return (
    <>
      {alert !== null && (
        <div className={`alert alert-${alert.type}`} style={alertStyle}>
          <i className="fas fa-info-circle">{''}</i> {alert.msg}
        </div>
      )}
    </>
  )
}

const alertStyle = {
  textAlign: 'center'
}

export default Alert;