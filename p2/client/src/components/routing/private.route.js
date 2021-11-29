import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'; // See: https://reactrouter.com/docs/en/v6/api#navigate
import AuthContext from '../../context/auth/Auth.context';

function PrivateRoute({ children }) {
  //const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return !isAuthenticated && !loading ? <Navigate to={'/login'} /> : children;
}

export default PrivateRoute;