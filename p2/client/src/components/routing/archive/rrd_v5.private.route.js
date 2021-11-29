import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth/Auth.context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const
    authContext = useContext(AuthContext),
    { isAuthenticated, loading } = authContext;

  return (
    <Route { ...rest } element={props => !isAuthenticated && !loading ? (
      <>
        <Navigate to={'/login'} />
      </>
    ) : (
      <Component {...props} />
    )} />
  );
};

export default PrivateRoute;