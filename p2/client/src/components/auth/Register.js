import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/Alert.context';
import AuthContext from '../../context/auth/Auth.context';

const Register = (props) => {
  const
    authContext = useContext(AuthContext),
    alertContext = useContext(AlertContext),
    [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      blind_passphrase: ''
    });

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const {
    name, email, password_confirmation, password, blind_passphrase
  } = user;

  const onChange = evt => setUser({...user, [evt.target.name]: evt.target.value})
  const onSubmit = evt => {
    evt.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password_confirmation) {
      setAlert('Passwords Do Not Match');
    } else {
      // Run Other Code
      register({
        name,
        email,
        password,
        blind_passphrase
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
          <label htmlFor={"name"}>Name</label>
          <input type={"text"} name={"name"} value={name} onChange={onChange} />
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
        <div className={"form-group"}>
          <label htmlFor={"blind_passphrase"}>Masking Passphrase*</label>
          <small>
            You will not be asked to remember the masking passphrase you enter when you register. I recommend you
            keyboard mash until you've reached the max character limit allowed for the field. This feature is in beta
            for enhanced application security.
          </small>
          <input type={"password"} name={"blind_passphrase"} value={blind_passphrase} onChange={onChange} />
        </div>
        <div>
          <input type={'submit'} value={'Register Account'} className={"btn btn-primary btn-block"}/>
        </div>
      </form>
    </div>
  );
};

export default Register;