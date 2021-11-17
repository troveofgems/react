import React from 'react';
import spinner from './img/spinner.gif';

const Spinner = () => {
  const spinnerMessage = 'Loading...';
  return (
    <>
      <img src={spinner} alt={spinnerMessage} style={spinnerStyle} />
    </>
  )
};

const spinnerStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block'
};

export default Spinner;