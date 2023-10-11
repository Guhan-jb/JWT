import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// This is a simple example of an authentication check function.
// In a real application, you would use your authentication logic.
const isAuthenticated = () => {
  const token=localStorage.getItem('Token')
  if(token!==null)
  return true;
  else{
    return false;
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
