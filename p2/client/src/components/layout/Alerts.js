import React, {useContext} from 'react';
import AlertContext from '../../context/alert/Alert.context';

const Alerts = (props) => {
  const
    alertContext = useContext(AlertContext),
    { alerts } = alertContext;

  return (
    alerts.length > 0 && alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className={"fas fa-info-circle"} />
      </div>
    ))
  )
};

export default Alerts;