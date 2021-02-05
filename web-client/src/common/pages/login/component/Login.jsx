import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../../constants/routes';

import AuthComponent from '../../../components/auth-component';
import LoginForm from '../../../components/forms/login-form';

import './login.scss';

const Login = (props) => {
  const {
    onLogin
  } = props;

  return (
    <AuthComponent
      className="login"
      title="Login"
    >
      <LoginForm onSubmit={onLogin} />
      <NavLink
        className="login__signup-link"
        to={ROUTES.REGISTRATION}
      >
        Don't have an account? Create one now
      </NavLink>
    </AuthComponent>
  );
};

export default Login;