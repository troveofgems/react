import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../context/alert/Alert.context';
import AuthContext from '../../context/auth/Auth.context';

const Register = (props) => {
  const
    authContext = useContext(AuthContext),
    alertContext = useContext(AlertContext),
    [user, setUser] = useState({
      firstName: '',
      middleInitial: '',
      lastName: '',
      email: '',
      password: '',
      password_confirmation: '',
    });

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return navigate('/');

    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const {
    firstName, middleInitial, lastName, email, password_confirmation, password
  } = user;

  const onChange = evt => setUser({...user, [evt.target.name]: evt.target.value})
  const onSubmit = evt => {
    evt.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password_confirmation) {
      setAlert('Passwords Do Not Match');
    } else {
      // Run Other Code
      register({
        firstName,
        middleInitial,
        lastName,
        email,
        password
      });

    }
  }

  return (
    <div className={'form-container'}>
      <h1>
        Account <span className={"text-primary"}>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className={"form-group"}>
          <label htmlFor={"firstName"}>First Name</label>
          <input type={"text"} name={"firstName"} value={firstName} onChange={onChange} />
        </div>
        <div className={"form-group"}>
          <label htmlFor={"middleInitial"}>Middle Initial</label>
          <input type={"text"} name={"middleInitial"} value={middleInitial} onChange={onChange} />
        </div>
        <div className={"form-group"}>
          <label htmlFor={"lastName"}>Last Name</label>
          <input type={"text"} name={"lastName"} value={lastName} onChange={onChange} />
        </div>
        <div className={"form-group"}>
          <label htmlFor={"email"}>Email Address</label>
          <input type={"email"} name={"email"} value={email} onChange={onChange} />
        </div>
        <div className={"form-group"}>
          <label htmlFor={"password"}>Password</label>
          <input type={"password"} name={"password"} value={password} onChange={onChange} />
        </div>
        <div className={"form-group"}>
          <label htmlFor={"password_confirmation"}>Password Confirmation</label>
          <input type={"password"} name={"password_confirmation"} value={password_confirmation} onChange={onChange} />
        </div>
        <div>
          <input type={'submit'} value={'Register Account'} className={"btn btn-primary btn-block"}/>
        </div>
      </form>
    </div>
  );
};

export default Register;