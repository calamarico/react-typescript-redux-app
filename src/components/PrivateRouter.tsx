import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import { store } from './App';

export const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (JSON.parse(localStorage.getItem('auth'))?.isAuth
      ? <Component {...props} />
      : <Redirect to="/login" />)}
  />
);

export default PrivateRoute;
