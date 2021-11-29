import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/Alert.context';
import AuthContext from '../../context/auth/Auth.context';

const Login = (props) => {
  const
    alertContext = useContext(AlertContext),
    authContext = useContext(AuthContext);

  const
    { setAlert } = alertContext,
    { login, error, clearErrors, isAuthenticated } = authContext;

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

  const [user, setUser] = useState({
    email: '',
    password: '',
    tokenRequestType: 'public'
  });

  const { email, password, tokenRequestType } = user;

  const onChange = evt => setUser({...user, [evt.target.name]: evt.target.value})
  const onSubmit = evt => {
    evt.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  }

  return (
    <div className={'form-container'}>
      <h1>
        Account <span className={"text-primary"}>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className={"form-group"}>
          <label htmlFor={"email"}>Email Address</label>
          <input type={"email"} name={"email"} value={email} onChange={onChange} />
        </div>
        <div className={"form-group"}>
          <label htmlFor={"password"}>Password</label>
          <input type={"password"} name={"password"} value={password} onChange={onChange} />
        </div>
        <div className={"form-group"}>
          <h5>Authentication Token Type</h5>
          <small>
            Are you on a public computer or un-trusted network? Keep the default selection when logging in.
            The effect is that your login session times will only be valid for 5 minutes prior to auto-logout out of
            the application. If you're connecting from a trusted network like your home, then select the private
            option for a generous 60 minutes of session time.
          </small>
          <input
            type={'radio'}
            name={'tokenRequestType'}
            value={'public'}
            checked={tokenRequestType === 'public'}
            onChange={onChange}
          />Public{' '}
          <input
            type={'radio'}
            name={'tokenRequestType'}
            value={'private'}
            checked={tokenRequestType === 'private'}
            onChange={onChange}
          />Private{' '}
        </div>
        <input type={"submit"} value={"Login"} className={"btn btn-primary btn-block"} />
        <div>
          <input type={'submit'} value={'Login'} className={"btn btn-primary btn-block"}/>
        </div>
       </form>
    </div>
  );
};

export default Login;