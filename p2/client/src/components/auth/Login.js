import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../context/alert/Alert.context';
import AuthContext from '../../context/auth/Auth.context';

const Login = () => {
  const
    alertContext = useContext(AlertContext),
    authContext = useContext(AuthContext);

  let navigate = useNavigate();

  const
    { setAlert } = alertContext,
    { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) return navigate('/');

    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

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
          <div className={""}>
            <input
              type={'radio'}
              name={'tokenRequestType'}
              value={'public'}
              checked={tokenRequestType === 'public'}
              onChange={onChange}
            />{' '}Secure{' '}
            <input
              type={'radio'}
              name={'tokenRequestType'}
              value={'private'}
              checked={tokenRequestType === 'private'}
              onChange={onChange}
            />{' '}Semi-Secure{' '}
          </div>
          <small>
            {tokenRequestType === "public" && (
              <>
                <div>
                  <strong>On a public computer or un-trusted network?</strong>
                </div>
                Keep the default selection when logging in.
                The effect is that your login session times will only be valid
                for 5 minutes prior to auto-logout out of the application.
              </>
            )}
            {tokenRequestType === "private" && (
              <>
                <div>
                  <strong>Connecting from a trusted network like your home or secure device?</strong>
                </div>
                Select the Semi-Secure option for a generous 8 hours of session time.
                This is not necessary nor really recommended: simply provided for your (insecure) convenience.
                <div>
                  <img src={"img/lazy-guard.gif"} alt={"Lazy Security Guard Gif"}
                    style={{width: '25%', height: '200px'}}
                  />
                </div>
              </>
            )}
          </small>
        </div>
        <div>
          <input type={'submit'} value={'Login'} className={"btn btn-primary btn-block"}/>
        </div>
       </form>
    </div>
  );
};

export default Login;