import React from 'react';

const Alert = ({ alert }) => {
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